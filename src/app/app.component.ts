import {Component} from '@angular/core';
import {ZonelessRouterService} from './services/zoneless-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'performance-app';

  constructor(private zonelessRouting: ZonelessRouterService) {
    zonelessRouting.init();
  }

}
