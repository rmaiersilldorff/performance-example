import {Routes} from '@angular/router';
import {TravelOfferPageComponent} from './pages/travel-offer-page/travel-offer-page.component';
import {BasketPageComponent} from './pages/basket-page/basket-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
export const routes: Routes = [
    {path: 'offers', component: TravelOfferPageComponent},
    {
        path: 'search',
        component: SearchPageComponent,
    },
    {path: 'basket', component: BasketPageComponent},
];
