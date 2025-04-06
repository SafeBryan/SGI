import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IMenu, MenuService } from '../../../core/services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sgi-title',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent implements OnInit {
  path!: IMenu;

  menuSrv = inject(MenuService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const currentPath =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuSrv.getMenuByUrl(currentPath);
  }
}
