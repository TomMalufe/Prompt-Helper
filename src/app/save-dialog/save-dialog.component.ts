import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent {
  promptName = '';

  constructor(public dialogRef: MatDialogRef<SaveDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
