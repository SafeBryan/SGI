import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './core/components/menu/menu.component';
import { IconService } from './core/services/icon.service';

@Component({
  selector: 'sgi-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'appGestionInmobiliaria';
  constructor(private iconService: IconService) {}
}
