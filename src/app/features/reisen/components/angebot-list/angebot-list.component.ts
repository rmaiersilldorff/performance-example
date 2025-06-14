import {Component, input} from '@angular/core';
import {NgScrollbar} from 'ngx-scrollbar';
import {ReiseCardComponent} from '@reisen/components';
import {AngebotDetailsDto} from '@reisen/api';

@Component({
    selector: 'app-angebot-list',
    templateUrl: './angebot-list.component.html',
    imports: [NgScrollbar, ReiseCardComponent],
    styleUrls: ['./angebot-list.component.scss'],
})
export class AngebotListComponent {
    angebote = input<AngebotDetailsDto[]>([]);

    trackByFn(index: number, item: AngebotDetailsDto) {
        return item.id;
    }
}
