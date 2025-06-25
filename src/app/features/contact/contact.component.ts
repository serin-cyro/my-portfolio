import { Component,HostListener,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
    this.iconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
  }
isMobile: boolean = false;

@HostListener('window:resize', [])
  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  ngOnInit() {
    this.checkMobile()
  }

}
