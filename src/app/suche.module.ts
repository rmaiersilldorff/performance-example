import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReiseListItemComponent} from './components/reise-list-item/reise-list-item.component';
import {SucheRoutingModule} from './suche-routing.module';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {angeboteFeature} from './+state/reducers';
import {StoreModule} from '@ngrx/store';

@NgModule({
    declarations: [
        SuchePageComponent,
        ReiseListItemComponent
    ],
    exports: [SuchePageComponent],
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(angeboteFeature),
    NgScrollbarModule,
    SucheRoutingModule
],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SucheModule {
}
