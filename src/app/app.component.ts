import {Component} from '@angular/core';
import {NavigationComponent} from '@core/components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [NavigationComponent],
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'performance-app';
}
