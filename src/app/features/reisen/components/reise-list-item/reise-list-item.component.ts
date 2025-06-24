import {Component, ElementRef, NgZone, inject, input, output} from '@angular/core';
import {MatListItem, MatListItemLine, MatListItemMeta, MatListItemTitle} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {Reise} from '@reisen/models';

@Component({
    selector: 'app-reise-list-item',
    templateUrl: './reise-list-item.component.html',
    styleUrls: ['./reise-list-item.component.scss'],
    imports: [MatListItem, MatIcon, MatIconButton, MatListItemTitle, MatListItemLine, MatListItemMeta],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReiseListItemComponent {
    private element = inject(ElementRef);
    private zone = inject(NgZone);

    readonly reise = input<Reise | undefined>(undefined);
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
