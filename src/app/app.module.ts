import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ReiseCardComponent} from './components/reise-card/reise-card.component';
import {AngebotPageComponent} from './pages/angebot-page/angebot-page.component';
import {MaterialModule} from './material.module';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';
import {ReiseListItemComponent} from './components/reise-list-item/reise-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngebotListComponent} from './components/angebot-list/angebot-list.component';
import {WarenkorbPageComponent} from './pages/warenkorb-page/warenkorb-page.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReiseCardComponent,
    AngebotPageComponent,
    SuchePageComponent,
    AngebotListComponent,
    ReiseListItemComponent,
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
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
