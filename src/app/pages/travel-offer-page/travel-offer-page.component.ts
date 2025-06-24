import {Component, ViewChild, ViewContainerRef, inject, signal} from '@angular/core';
import {first} from 'rxjs/operators';
import {TravelOfferListComponent} from '@trip/components';
import {OfferService} from '@trip/api';
import {MatButtonModule} from '@angular/material/button';
import {mapToTripList, Trip} from '@trip/models';

@Component({
    selector: 'app-travel-offer-page',
    templateUrl: './travel-offer-page.component.html',
    imports: [TravelOfferListComponent, MatButtonModule],
    styleUrls: ['./travel-offer-page.component.scss'],
})
export class TravelOfferPageComponent {
    private travelOfferService = inject(OfferService);

    @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef | undefined;
    trips = signal<Trip[]>([]);
    changeIndex = -1;

    constructor() {
        this.travelOfferService
            .listTravelOffers()
            .pipe(first())
            .subscribe((offers) => {
                this.trips.set(mapToTripList(offers.elements));
            });
    }

    changeItem() {
        this.changeIndex + 1 <= this.trips().length ? this.changeIndex++ : (this.changeIndex = 0);
        this.travelOfferService
            .changeTravelOffer({index: this.changeIndex})
            .pipe(first())
            .subscribe((offers) => {
                this.trips.set(mapToTripList(offers.elements));
            });
    }

    addItem() {
        this.travelOfferService
            .addTravelOffer()
            .pipe(first())
            .subscribe((offers) => {
                this.trips.set(mapToTripList(offers.elements));
            });
    }
}
