import {ChangeDetectionStrategy, Component, ElementRef, NgZone, inject, input} from '@angular/core';
import {Reise} from '@reisen/models';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {AngebotDetailsDto} from '@reisen/api';

@Component({
    selector: 'app-reise-card',
    templateUrl: './reise-card.component.html',
    styleUrls: ['./reise-card.component.scss'],
    imports: [MatCard, MatCardHeader, MatCardContent, MatCardActions, MatCardSubtitle, MatCardTitle, DatePipe, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReiseCardComponent {
    private element = inject(ElementRef);
    private zone = inject(NgZone);

    readonly reise = input<AngebotDetailsDto | undefined>(undefined);

    blink() {
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });
    }
}
