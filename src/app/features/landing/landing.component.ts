import { Component, OnInit,HostListener,ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from "../contact/contact.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { trigger, style, animate, transition } from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExperienceTimelineComponent } from '../experience-timeline/experience-timeline.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, ContactComponent, ProjectsComponent, SkillsComponent, MatSidenavModule,MatTooltipModule,ExperienceTimelineComponent ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('drawerAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef ){}
  roles = ['Cybersecurity Student','UI Developer', 'Gaming Enthusiast'];
  currentRoleIndex = 0;
  displayedRole = this.roles[0]
  isMobile: boolean = false;

   socialLinks = [
    { name: 'GitHub', url: 'https://github.com/serin-cyro', icon: 'https://github.com/fluidicon.png' },
    { name: 'Gmail', url: 'mailto:serintony@gmail.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/serin-tony/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
    { name: 'Telegram', url: 'https://t.me/@agent47_oops', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/t_h_e_a_g_e_n_t/', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg' }
  ];

   sections = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline'},
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Hire Me?' }
  ];

  currentSection: string = '';

  ngOnInit() {
    this.checkMobile()
    setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.displayedRole = this.roles[this.currentRoleIndex];
    }, 2000);
  }
   scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    //this.currentSection = sectionId;
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
onScroll() {
  const scrollMidpoint = window.innerHeight / 2;
  console.log('--- SCROLL EVENT ---');
  console.log('Window midpoint:', scrollMidpoint);

  for (const section of this.sections) {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      console.log(`Checking section: ${section.id}`, rect);

      if (rect.top <= scrollMidpoint && rect.bottom >= scrollMidpoint) {
        if (this.currentSection !== section.id) {
          console.log('🟢 New current section:', section.id);
          this.currentSection = section.id;
        }
        this.cdr.detectChanges();
        break;
      }
    }
  }
}

   @HostListener('window:resize', [])
  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

}
