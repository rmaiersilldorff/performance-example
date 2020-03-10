import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-question-dialog',
  template: `
    <button type="button" mat-button.mat-small class="button-dismiss"
            (click)="close.next(undefined)"><i class="fal fa-times"></i>
    </button>
    <h1 mat-dialog-title><b>{{ title }}</b></h1>
    <div mat-dialog-content>
      <div class="font-settings" [innerHTML]="message"></div>
    </div>
    <div mat-dialog-actions class="flex-content-end">
      <button type="button" mat-button
              (click)="close.next(true)">Ja
      </button>
      <button type="button" mat-raised-button
              (click)="close.next(false)">Nein
      </button>
    </div>
  `,
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {

  title: string;
  message: string;

  close = new Subject<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

}
