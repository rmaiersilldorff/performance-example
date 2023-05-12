import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {NgScrollbarModule} from 'ngx-scrollbar';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

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
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production,
    }),
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
