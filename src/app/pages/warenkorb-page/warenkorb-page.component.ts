import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {NgScrollbar} from 'ngx-scrollbar';
import {AsyncPipe} from '@angular/common';
import {MatLine} from '@angular/material/core';
import {Reise} from '@reisen/models';
import {BasketService} from '@basket/services/basket.service';

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
