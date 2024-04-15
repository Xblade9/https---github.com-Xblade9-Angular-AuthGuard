import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-alertdialogbox',
  templateUrl: './alertdialogbox.component.html',
  styleUrls: ['./alertdialogbox.component.css'],
})
export class AlertdialogboxComponent {
  message: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertdialogboxComponent>,
    private route: Router
  ) {
    if (data) {
      this.message = data.message;
    } else {
      this.message = 'Not Found';
    }
  }

  onConfirmationClick() {
    this.dialogRef.close();
    this.route.navigate(['login']);
  }
}
