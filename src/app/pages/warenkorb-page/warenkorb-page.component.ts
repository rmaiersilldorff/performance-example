import {Component, inject} from '@angular/core';
import {Reise} from '../../models/common';
import {Observable} from 'rxjs';
import {BasketService} from '../../services/basket.service';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {NgScrollbar} from 'ngx-scrollbar';
import {AsyncPipe} from '@angular/common';
import {MatLine} from '@angular/material/core';

@Component({
    selector: 'app-warenkorb-page',
    templateUrl: './warenkorb-page.component.html',
    imports: [
        MatList,
        NgScrollbar,
        MatListItem,
        AsyncPipe,
        MatListSubheaderCssMatStyler,
        MatLine
    ],
    styleUrls: ['./warenkorb-page.component.scss']
})
export class WarenkorbPageComponent {
    private basketService = inject(BasketService);

    basket$: Observable<Reise[]> = this.basketService.selectAll();
}
