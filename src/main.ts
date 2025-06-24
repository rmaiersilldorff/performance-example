import {enableProdMode, importProvidersFrom, provideZonelessChangeDetection} from '@angular/core';

import {environment} from './environments/environment';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {routes} from './app/routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {AppComponent} from './app/app.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {mockApiInterceptor} from '@core/services';
import {provideRouter} from '@angular/router';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, LayoutModule, FormsModule, ReactiveFormsModule, NgScrollbarModule),
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        provideHttpClient(withInterceptors([mockApiInterceptor])),
        provideRouter(routes),
        provideAnimations(),
        provideZonelessChangeDetection(),
    ],
}).catch((err) => console.error(err));
