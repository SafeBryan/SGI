import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'bpaz-form-offers',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './form-offers.component.html',
  styleUrl: './form-offers.component.css',
})
export class FormOffersComponent {
  transactionName: string = '';

  constructor(private dialogRef: MatDialogRef<FormOffersComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.transactionName.trim()) {
      this.dialogRef.close({ name: this.transactionName });
    }
  }
}
