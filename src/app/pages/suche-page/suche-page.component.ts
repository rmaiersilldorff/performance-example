import {Component} from '@angular/core';
import {Reise} from '../../models/common';

@Component({
    selector: 'app-suche-page',
    templateUrl: './suche-page.component.html',
    styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent {

    reisen: Reise[];
    filteredReisen: Reise[] = [];
    destination = '';
    nights = 1;

    addToCart(item: Reise) {
        throw new Error('not implemented yet');
    }

    search(): void {
        throw new Error('not implemented yet');
    }
}
