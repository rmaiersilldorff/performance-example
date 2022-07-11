import {ApplicationRef, ErrorHandler, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RxEffects} from '@rx-angular/state/effects';

@Injectable({
  providedIn: 'root',
  deps: [RxEffects]
})
export class ZonelessRouterService extends RxEffects {
  constructor(private router: Router, private appRef: ApplicationRef, errorHandler: ErrorHandler) {
    super(errorHandler);
  }

  init() {
    this.register(this.router.events, (routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.appRef.tick();
      }
    });
  }

}
