import {Component} from '@angular/core';
import {NavigationComponent} from './ui/navigation/navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        NavigationComponent
    ],
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'performance-app';
}
