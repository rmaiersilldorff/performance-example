import {Component, effect, inject, signal} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {MatFormField, MatHint, MatInput, MatSuffix} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatList, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {NgScrollbar} from 'ngx-scrollbar';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatLabel} from '@angular/material/form-field';
import {MatIconButton} from '@angular/material/button';
import {ReiseListItemComponent} from '@reisen/components';
import {AngebotStore} from '@reisen/+state';
import {AngebotDetailsDto, AngebotService} from '@reisen/api';

@Component({
    selector: 'app-suche-page',
    templateUrl: './suche-page.component.html',
    imports: [
        MatFormField,
        FormsModule,
        MatIcon,
        MatHint,
        ReiseListItemComponent,
        MatList,
        MatLabel,
        NgScrollbar,
        MatInput,
        MatIconButton,
        MatSuffix,
        MatListSubheaderCssMatStyler,
    ],
    providers: [AngebotStore, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
    styleUrls: ['./suche-page.component.scss'],
})
export class SuchePageComponent {
    filteredAngebote = signal<AngebotDetailsDto[]>([]);
    destination = signal('');
    nights = signal(1);

    private readonly angebotService = inject(AngebotService);

    constructor() {
        effect(() => {
            void this.search();
        });
    }

    addToCart(item: AngebotDetailsDto) {
        throw new Error('not implemented yet');
    }

    async search(): Promise<void> {
        const name = this.destination();
        const nights = this.nights();

        const result = await lastValueFrom(this.angebotService.searchAngebot({name, nights}));
        this.filteredAngebote.set(result.elements);
    }
}
