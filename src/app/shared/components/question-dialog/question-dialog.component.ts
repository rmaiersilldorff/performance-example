import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
    selector: 'app-question-dialog',
    template: `
        <button type="button" mat-button.mat-small class="button-dismiss" (click)="close.next(undefined)"><i class="fal fa-times"></i></button>
        <h1 mat-dialog-title>
            <b>{{ title }}</b>
        </h1>
        <div mat-dialog-content>
            <div class="font-settings" [innerHTML]="message"></div>
        </div>
        <div mat-dialog-actions class="flex-content-end">
            <button type="button" mat-button (click)="close.next(true)">Ja</button>
            <button type="button" mat-raised-button (click)="close.next(false)">Nein</button>
        </div>
    `,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton],
    styleUrls: ['./question-dialog.component.scss'],
})
export class QuestionDialogComponent {
    title = '';
    message = '';

    close = new Subject<boolean | undefined>();
}
