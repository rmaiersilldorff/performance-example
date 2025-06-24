import {Component, effect, inject, signal} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {MatFormField, MatHint, MatInput, MatSuffix} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatList, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {NgScrollbar} from 'ngx-scrollbar';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatLabel} from '@angular/material/form-field';
import {MatIconButton} from '@angular/material/button';
import {TripListItemComponent} from '@trip/components';
import {TravelOfferStore} from '@trip/+state';
import {OfferService} from '@trip/api';
import {BasketService} from '@basket/services'
import {mapToTripList, Trip} from '@trip/models';

@Component({
    selector: 'app-suche-page',
    templateUrl: './search-page.component.html',
    imports: [
        MatFormField,
        FormsModule,
        MatIcon,
        MatHint,
        TripListItemComponent,
        MatList,
        MatLabel,
        NgScrollbar,
        MatInput,
        MatIconButton,
        MatSuffix,
        MatListSubheaderCssMatStyler,
    ],
    providers: [TravelOfferStore, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
    styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
    filteredOffers = signal<Trip[]>([]);
    destination = signal('');
    nights = signal(1);

    private readonly travelOfferService = inject(OfferService);
    basketService = inject(BasketService);

    constructor() {
        effect(() => {
            void this.search();
        });
    }

    addToCart(item: Trip) {
        this.basketService.add(item);
    }

    async search(): Promise<void> {
        const name = this.destination();
        const nights = this.nights();

        const result = await lastValueFrom(this.travelOfferService.searchTravelOffers({name, nights}));
        this.filteredOffers.set(mapToTripList(result.elements));
    }
}
