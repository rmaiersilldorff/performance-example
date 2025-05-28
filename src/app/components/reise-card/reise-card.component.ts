import {ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, inject} from '@angular/core';
import {Reise} from '../../models/common';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from '@angular/material/card';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
    selector: 'app-reise-card',
    templateUrl: './reise-card.component.html',
    styleUrls: ['./reise-card.component.scss'],
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCardSubtitle,
        MatCardTitle,
        DatePipe,
        CurrencyPipe
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseCardComponent {
    private element = inject(ElementRef);
    private zone = inject(NgZone);

    @Input() reise: Reise;

    blink() {
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });
    }

}
