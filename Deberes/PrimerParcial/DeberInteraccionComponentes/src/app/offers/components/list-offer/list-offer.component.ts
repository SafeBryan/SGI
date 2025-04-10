import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { metaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormOffersComponent } from '../../../shared/components/forms/form-offers/form-offers.component';

interface IOferta {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'bpaz-list-offer',
  imports: [TitleComponent, ContainerComponent, TableComponent],
  templateUrl: './list-offer.component.html',
  styleUrl: './list-offer.component.css',
})
export class ListOfferComponent {
  data: IOferta[] = [
    { id: 1, nombre: 'Oferta 1', descripcion: 'Descripción' },
    { id: 2, nombre: 'Oferta 2', descripcion: 'Descripción' },
    { id: 3, nombre: 'Oferta 3', descripcion: 'Descripción' },
    { id: 4, nombre: 'Oferta 4', descripcion: 'Descripción' },
    { id: 5, nombre: 'Oferta 5', descripcion: 'Descripción' },
    { id: 6, nombre: 'Oferta 6', descripcion: 'Descripción' },
  ];

  metaDataColumns: metaDataColumn[] = [
    { field: 'id', title: 'Identificador' },
    { field: 'nombre', title: 'Oferta' },
    { field: 'descripcion', title: 'Descripcion' },
  ];

  constructor(private dialog: MatDialog) {}

  openForm() {
    const dialogRef = this.dialog.open(FormOffersComponent);
  }
}
