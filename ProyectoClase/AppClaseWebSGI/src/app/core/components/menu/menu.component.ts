import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { IMenu, MenuService } from '../../services/menu.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sgi-menu',
  imports: [
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  listMenu: IMenu[];

  menuSrv = inject(MenuService);
  constructor(/*private menuService:MenuService*/) {
    /*this.listMenu = menuService.getMenu()*/
    this.listMenu = this.menuSrv.getMenu();
  }
}
