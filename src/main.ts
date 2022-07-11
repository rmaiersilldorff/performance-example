import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {SuchePageComponent} from './app/pages/suche-page/suche-page.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(SuchePageComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot([])),
    importProvidersFrom(BrowserAnimationsModule),
  ]
});
