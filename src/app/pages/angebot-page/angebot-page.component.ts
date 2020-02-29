import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ReiseService} from '../../services/reise.service';
import {ReiseListComponent} from '../../components/reise-list/reise-list.component';
import {first} from 'rxjs/operators';
import {Reise} from '../../models/common';

@Component({
  selector: 'app-angebot-page',
  templateUrl: './angebot-page.component.html',
  styleUrls: ['./angebot-page.component.scss']
})
export class AngebotPageComponent implements OnInit {

  @ViewChild('vcr', {read: ViewContainerRef}) vcr: ViewContainerRef;
  angebotListRef: ComponentRef<ReiseListComponent>;
  angebote: Reise[];

  constructor(private reiseService: ReiseService,
              private resolver: ComponentFactoryResolver) {
    this.reiseService.getAngebote().pipe(first())
      .subscribe((angebote) => {
        this.angebote = angebote;
      });
  }

  ngOnInit() {
    this.loadComponent();
  }

  async loadComponent() {
    if (!this.angebotListRef) {
      const {ReiseListComponent} = await import(`../../components/reise-list/reise-list.component`);
      const factory = this.resolver.resolveComponentFactory<ReiseListComponent>(ReiseListComponent);
      this.angebotListRef = this.vcr.createComponent(factory);
      this.angebotListRef.instance.items = this.angebote;
    }
  }

}
