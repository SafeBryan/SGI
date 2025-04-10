import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { FormTransactionComponent } from '../../../shared/components/forms/form-transaction/form-transaction.component';
import { metaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

interface ITransacion {
  id: number;
  name: string;
}

@Component({
  selector: 'bpaz-list-transaction',
  standalone: true,
  imports: [TitleComponent, ContainerComponent, TableComponent],
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css'],
})
export class ListTransactionComponent {
  data: ITransacion[] = [
    { id: 1, name: 'Transaction 1' },
    { id: 2, name: 'Transaction 2' },
    { id: 3, name: 'Transaction 3' },
    { id: 4, name: 'Transaction 4' },
    { id: 5, name: 'Transaction 5' },
  ];

  metaDataColumns: metaDataColumn[] = [
    { field: 'id', title: 'Identificador' },
    { field: 'name', title: 'Transaccion' },
  ];

  constructor(private dialog: MatDialog) {}

  openForm() {
    const dialogRef = this.dialog.open(FormTransactionComponent);
  }
}
