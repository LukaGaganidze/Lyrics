import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private progressBarBSub$ = new BehaviorSubject<number>(0);
  progressBar$: Observable<number> = this.progressBarBSub$.asObservable();

  private currentRouteBSub$ = new BehaviorSubject('');
  currentRoute$ = this.currentRouteBSub$.asObservable();

  constructor() {}

  onStartProgressBar(route: string) {
    const currentRouteVal = this.currentRouteBSub$.getValue();
    this.currentRouteBSub$.next(route);

    if (currentRouteVal === route) {
      this.progressBarBSub$.next(0);
    } else {
      this.progressBarBSub$.next(70);
    }
  }
  onFinishProgressBar() {
    this.progressBarBSub$.next(100);
  }

  onEndProgressBar() {
    this.progressBarBSub$.next(0);
  }
}
