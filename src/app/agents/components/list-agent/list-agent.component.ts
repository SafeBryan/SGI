import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { metaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';

interface IAgente {
  dni: string;
  name: string;
  email: string;
}

@Component({
  selector: 'sgi-list-agent',
  imports: [ContainerComponent, TitleComponent, TableComponent],
  templateUrl: './list-agent.component.html',
  styleUrl: './list-agent.component.css',
})
export class ListAgentComponent {
  data: IAgente[] = [
    { dni: '12345', name: 'Bryan', email: 'bryan@gmail.com' },
    { dni: '12346', name: 'Jony', email: 'jony@gmail.com' },
    { dni: '12347', name: 'Betza', email: 'betza@gmail.com' },
    { dni: '12348', name: 'Leandro', email: 'leandro@gmail.com' },
    { dni: '12349', name: 'Mateo', email: 'mateo@gmail.com' },
    { dni: '12340', name: 'Daya', email: 'daya@gmail.com' },
  ];

  metaDataColumns: metaDataColumn[] = [
    { field: 'dni', title: 'Cedula' },
    { field: 'name', title: 'Agente' },
    { field: 'email', title: 'Correo Electronico' },
  ];
}
