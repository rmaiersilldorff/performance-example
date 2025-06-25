import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgScrollbar} from 'ngx-scrollbar';
import {TripCardComponent} from '@trip/components';
import {Trip} from '@trip/models';

@Component({
    selector: 'app-travel-offer-list',
    templateUrl: './travel-offer-list.component.html',
    imports: [NgScrollbar, TripCardComponent],
    styleUrls: ['./travel-offer-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelOfferListComponent {
    trips = input<Trip[]>([]);

    trackByFn(index: number, item: Trip) {
        return item.id;
    }
}
