import { Component } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'sgi-list-favorite',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './list-favorite.component.html',
  styleUrl: './list-favorite.component.css',
})
export class ListFavoriteComponent {}
