import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SucheRoutingModule} from './suche-routing.module';
import {NgScrollbarModule} from 'ngx-scrollbar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgScrollbarModule,
        SucheRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SucheModule {
}
