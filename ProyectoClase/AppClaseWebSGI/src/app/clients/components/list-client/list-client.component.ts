import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'sgi-list-client',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css',
})
export class ListClientComponent {}
