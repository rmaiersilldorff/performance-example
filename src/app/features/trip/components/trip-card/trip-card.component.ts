import {ChangeDetectionStrategy, Component, ElementRef, NgZone, inject, input} from '@angular/core';
import {Trip} from '@trip/models';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
    selector: 'app-trip-card',
    templateUrl: './trip-card.component.html',
    styleUrls: ['./trip-card.component.scss'],
    imports: [MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardSubtitle, MatCardTitle, DatePipe, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripCardComponent {
    private element = inject(ElementRef);
    private zone = inject(NgZone);

    readonly trip = input<Trip | undefined>(undefined);

    blink() {
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });
    }
}
