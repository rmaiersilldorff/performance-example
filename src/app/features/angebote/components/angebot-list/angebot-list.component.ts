import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NgScrollbar} from 'ngx-scrollbar';
import {AsyncPipe} from '@angular/common';
import {ReiseCardComponent} from '@reisen/components';
import {Reise} from '@reisen/models';

@Component({
    selector: 'app-angebot-list',
    templateUrl: './angebot-list.component.html',
    imports: [
        NgScrollbar,
        ReiseCardComponent,
        AsyncPipe
    ],
    styleUrls: ['./angebot-list.component.scss']
})
export class AngebotListComponent {

    @Input() angebote$: BehaviorSubject<Reise[]> = new BehaviorSubject<Reise[]>([]);

    trackByFn(index: number, item: Reise) {
        return item.id;
    }

}
