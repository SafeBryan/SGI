import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'sgi-list-contact',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.css',
})
export class ListContactComponent {}
