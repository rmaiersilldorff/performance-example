import {Component, ElementRef, NgZone, inject, input, output} from '@angular/core';
import {MatListItem, MatListItemLine, MatListItemMeta, MatListItemTitle} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {Trip} from '@trip/models';

@Component({
    selector: 'app-trip-list-item',
    templateUrl: './trip-list-item.component.html',
    styleUrls: ['./trip-list-item.component.scss'],
    imports: [MatListItem, MatIcon, MatIconButton, MatListItemTitle, MatListItemLine, MatListItemMeta],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListItemComponent {
    private element = inject(ElementRef);
    private zone = inject(NgZone);

    readonly trip = input<Trip | undefined>(undefined);
    readonly addAction = output<void>();

    blink() {
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });
    }
}
