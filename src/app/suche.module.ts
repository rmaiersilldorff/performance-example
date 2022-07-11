import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReiseListItemComponent} from './components/reise-list-item/reise-list-item.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SucheRoutingModule} from './suche-routing.module';

@NgModule({
  declarations: [
    SuchePageComponent,
    ReiseListItemComponent
  ],
  exports: [SuchePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SucheRoutingModule
  ],
})
export class SucheModule {
}
