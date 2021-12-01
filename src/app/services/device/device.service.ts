import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DeviceService {
  private mostPopularViewedArticlesObj$ = new Subject<void>();

  constructor() {
    window.addEventListener('scroll', () => {
      const pos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        document.documentElement.offsetHeight;

      const max = document.documentElement.scrollHeight;

      if (pos >= max - 1) {
        this.emitScrollOnBottom();
      }
    });
  }

  public onScrollReachBottom$(): Observable<void> {
    return this.mostPopularViewedArticlesObj$.asObservable();
  }

  private emitScrollOnBottom(): void {
    this.mostPopularViewedArticlesObj$.next();
  }
}
