import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngebotPageComponent} from './pages/angebot-page/angebot-page.component';
import {WarenkorbPageComponent} from './pages/warenkorb-page/warenkorb-page.component';


const routes: Routes = [
  {path: 'angebote', component: AngebotPageComponent},
  {
    path: 'suche',
    loadChildren: () => import('./suche.module').then((m) => m.SucheModule)
  },
  {path: 'warenkorb', component: WarenkorbPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
