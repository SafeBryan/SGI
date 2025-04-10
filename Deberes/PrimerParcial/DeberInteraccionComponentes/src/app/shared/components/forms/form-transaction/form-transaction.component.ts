import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'bpaz-form-transaction',
  standalone: true,
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
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.css'],
})
export class FormTransactionComponent {
  transactionName: string = '';

  constructor(private dialogRef: MatDialogRef<FormTransactionComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.transactionName.trim()) {
      this.dialogRef.close({ name: this.transactionName });
    }
  }
}
