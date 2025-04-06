import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';

@Component({
  selector: 'sgi-list-property',
  imports: [TitleComponent, ContainerComponent],
  templateUrl: './list-property.component.html',
  styleUrl: './list-property.component.css',
})
export class ListPropertyComponent {}
