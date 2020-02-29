import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ReiseCardComponent} from './components/reise-card/reise-card.component';
import {AngebotPageComponent} from './pages/angebot-page/angebot-page.component';
import {ReiseListComponent} from './components/reise-list/reise-list.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReiseCardComponent,
    AngebotPageComponent,
    ReiseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
