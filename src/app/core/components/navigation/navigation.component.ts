import {Component, inject, Signal} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, shareReplay} from 'rxjs/operators';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
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
        MatNavList,
        RouterOutlet,
        MatListItem,
        RouterLink,
        MatIconButton,
        MatBadgeModule,
    ],
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    private breakpointObserver = inject(BreakpointObserver);
    private basketService = inject(BasketService);

    isHandset: Signal<boolean> = toSignal(
        this.breakpointObserver.observe(Breakpoints.Handset).pipe(
            map((result) => result.matches),
            shareReplay({ bufferSize: 1, refCount: true }),
        ),
        {
            initialValue: false,
        }
  );

    basketCount: Signal<number>;

    constructor() {
        this.basketCount = this.basketService.getCount();
    }
}
