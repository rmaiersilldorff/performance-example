import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReiseListItemComponent} from './components/reise-list-item/reise-list-item.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SucheRoutingModule} from './suche-routing.module';
import {LetModule, PushModule} from '@rx-angular/template';
import {ForModule} from '@rx-angular/template/experimental/for';
import {ViewportPrioModule} from '@rx-angular/template/experimental/viewport-prio';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    SucheRoutingModule,
    LetModule,
    PushModule,
    ViewportPrioModule,
    ForModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
})
export class SucheModule {
}
