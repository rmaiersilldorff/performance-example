import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';


const routes: Routes = [
  {path: '', component: SuchePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucheRoutingModule {
}
