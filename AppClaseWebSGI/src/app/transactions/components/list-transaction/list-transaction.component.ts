import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'sgi-list-transaction',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css',
})
export class ListTransactionComponent {}
