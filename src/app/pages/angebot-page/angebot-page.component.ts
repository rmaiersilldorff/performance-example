import {Component, ViewChild, ViewContainerRef, inject, signal} from '@angular/core';
import {first} from 'rxjs/operators';
import {AngebotListComponent} from '@reisen/components';
import {AngebotService} from '@reisen/api';
import {MatButtonModule} from '@angular/material/button';
import {mapToReiseList, Reise} from '@reisen/models';

@Component({
    selector: 'app-angebot-page',
    templateUrl: './angebot-page.component.html',
    imports: [AngebotListComponent, MatButtonModule],
    styleUrls: ['./angebot-page.component.scss'],
})
export class AngebotPageComponent {
    private angebotService = inject(AngebotService);

    @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef | undefined;
    angebote = signal<Reise[]>([]);
    changeIndex = -1;

    constructor() {
        this.angebotService
            .listAngebote()
            .pipe(first())
            .subscribe((angebotDetails) => {
                this.angebote.set(mapToReiseList(angebotDetails.elements));
            });
    }

    changeItem() {
        this.changeIndex + 1 <= this.angebote().length ? this.changeIndex++ : (this.changeIndex = 0);
        this.angebotService
            .changeAngebot({index: this.changeIndex})
            .pipe(first())
            .subscribe((angebote) => {
                this.angebote.set(mapToReiseList(angebote.elements));
            });
    }

    addItem() {
        this.angebotService
            .addAngebot()
            .pipe(first())
            .subscribe((angebote) => {
                this.angebote.set(mapToReiseList(angebote.elements));
            });
    }
}
