import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private listIcons: IIcon[] = [
    { name: 'logo', path: '../../../assets/icons/logo.svg' },
    { name: 'agent', path: '../../../assets/icons/agent.svg' },
    { name: 'client', path: '../../../assets/icons/client.svg' },
    { name: 'contact', path: '../../../assets/icons/contact.svg' },
    { name: 'favorite', path: '../../../assets/icons/favorite.svg' },
    { name: 'property', path: '../../../assets/icons/properties.svg' },
    { name: 'transaction', path: '../../../assets/icons/transaction.svg' },
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    this.listIcons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
