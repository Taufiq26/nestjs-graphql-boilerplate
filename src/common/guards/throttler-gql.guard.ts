import { Injectable, ExecutionContext, Logger } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ThrottlerException } from '@nestjs/throttler';

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
  private logger = new Logger(GqlThrottlerGuard.name);
  private hitCounters = new Map<string, { 
    count: number, 
    lastReset: number,
    lastAccess: number,
    blockedUntil?: number,
  }>();

  private cleanupStaleEntries() {
    const now = Date.now();
    const staleTimeout = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    for (const [ip, tracker] of this.hitCounters.entries()) {
      if (now - tracker.lastAccess > staleTimeout) {
        this.hitCounters.delete(ip);
        this.logger.debug(`Cleaned up stale entry for IP ${ip}`);
      }
    }
  }

  protected handleRequest(requestProps: any): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(requestProps.context);
    const req = gqlContext.getContext().req;
    const clientIP = req.ip;
    
    // Use request-specific flag to track guard triggers
    if (req._graphqlThrottlerLogged) {
      return Promise.resolve(true);
    }
    req._graphqlThrottlerLogged = true;
    
    const now = Date.now();
    const ipTracker = this.hitCounters.get(clientIP) || { 
      count: 0, 
      lastReset: now,
      lastAccess: now
    };

    // Update last access time
    ipTracker.lastAccess = now;

    const timeElapsed = now - ipTracker.lastReset;
    if (timeElapsed >= requestProps.throttler.ttl * 1000) {
      ipTracker.count = 0;
      ipTracker.lastReset = now;
      
      // Perform cleanup periodically (1% chance per request to avoid impacting performance)
      if (Math.random() < 0.01) {
        this.cleanupStaleEntries();
      }
    }

    ipTracker.count++;
    // this.logger.debug(`Hits for IP ${clientIP}: ${ipTracker.count}`);

    this.hitCounters.set(clientIP, ipTracker);
    
    if (ipTracker.count > requestProps.throttler.limit) {
      const remainingTime = Math.ceil((requestProps.throttler.ttl * 1000 - timeElapsed)/1000);
      this.logger.warn(`IP ${clientIP} blocked - Total requests: ${ipTracker.count}/${requestProps.throttler.limit}`);
      throw new ThrottlerException(`Too Many Requests. Try again in ${remainingTime} seconds`);
    }
    
    return Promise.resolve(true);
  }
}
