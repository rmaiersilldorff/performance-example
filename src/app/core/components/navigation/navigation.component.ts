import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {BasketService} from '@basket/services';

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
        MatIconButton,
        NgIf,
    ],
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    private breakpointObserver = inject(BreakpointObserver);
    private basketService = inject(BasketService);

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result) => result.matches),
        shareReplay(),
    );

    basketCount$: Observable<number>;

    constructor() {
        this.basketCount$ = this.basketService.getCount();
    }
}
