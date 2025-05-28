import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {BasketService} from '../../services/basket.service';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIconButton} from '@angular/material/button';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    imports: [
        MatSidenavContainer,
        MatSidenavContent,
        MatSidenav,
        MatToolbar,
        MatIcon,
        AsyncPipe,
        MatNavList,
        RouterOutlet,
        MatListItem,
        RouterLink,
        MatIconButton
    ],
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    private breakpointObserver = inject(BreakpointObserver);
    private basketService = inject(BasketService);


    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    basketCount$: Observable<number>;

    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);

    constructor() {
        this.basketCount$ = this.basketService.getCount();
    }

}
