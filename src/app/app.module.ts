import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ReiseCardComponent} from './components/reise-card/reise-card.component';
import {AngebotPageComponent} from './pages/angebot-page/angebot-page.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngebotListComponent} from './components/angebot-list/angebot-list.component';
import {WarenkorbPageComponent} from './pages/warenkorb-page/warenkorb-page.component';
import {ViewportPrioModule} from '@rx-angular/template/experimental/viewport-prio';
import {LetModule, PushModule} from '@rx-angular/template';
import {ForModule} from '@rx-angular/template/experimental/for';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReiseCardComponent,
    AngebotPageComponent,
    AngebotListComponent,
    WarenkorbPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
