import {Routes} from '@angular/router';
import {AngebotPageComponent} from './pages/angebot-page/angebot-page.component';
import {WarenkorbPageComponent} from './pages/warenkorb-page/warenkorb-page.component';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';
export const routes: Routes = [
    {path: 'angebote', component: AngebotPageComponent},
    {
        path: 'suche',
        component: SuchePageComponent,
    },
    {path: 'warenkorb', component: WarenkorbPageComponent},
];
