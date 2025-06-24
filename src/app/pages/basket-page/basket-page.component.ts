import {Component, inject, Signal} from '@angular/core';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {NgScrollbar} from 'ngx-scrollbar';
import {Trip} from '@trip/models';
import {BasketService} from '@basket/services/basket.service';

@Component({
    selector: 'app-basket-page',
    templateUrl: './basket-page.component.html',
    imports: [MatList, NgScrollbar, MatListItem, MatListSubheaderCssMatStyler],
    styleUrls: ['./basket-page.component.scss'],
})
export class BasketPageComponent {
    private basketService = inject(BasketService);

    basket: Signal<Trip[]> = this.basketService.selectAll();
}
