import {Component, input} from '@angular/core';
import {NgScrollbar} from 'ngx-scrollbar';
import {ReiseCardComponent} from '@reisen/components';
import {Reise} from '@reisen/models';

@Component({
    selector: 'app-angebot-list',
    templateUrl: './angebot-list.component.html',
    imports: [NgScrollbar, ReiseCardComponent],
    styleUrls: ['./angebot-list.component.scss'],
})
export class AngebotListComponent {
    angebote = input<Reise[]>([]);

    trackByFn(index: number, item: Reise) {
        return item.id;
    }
}
