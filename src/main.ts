import {enableProdMode, importProvidersFrom} from '@angular/core';

import {environment} from './environments/environment';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {AppRoutingModule} from './app/app-routing.module';
import {provideAnimations} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {AppComponent} from './app/app.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {mockApiInterceptor} from '@core/services';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, LayoutModule, FormsModule, ReactiveFormsModule, NgScrollbarModule),
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        provideHttpClient(withInterceptors([mockApiInterceptor])),
        provideAnimations()
    ]
})
    .catch(err => console.error(err));
