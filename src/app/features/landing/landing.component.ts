import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactComponent } from "../contact/contact.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { ExperienceTimelineComponent } from '../experience-timeline/experience-timeline.component';
import { TypewriterComponent } from '../../shared/typewriter/typewriter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceTimelineComponent,
    TypewriterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  // Dynamic roles for typewriter effect
  roles = [
    'Security Engineer',
    'AppSec Specialist',
    'Cloud Security Expert',
    'Threat Hunter',
    'Full-Stack Developer'
  ];

  // Social media links
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/serin-cyro',
      icon: 'https://cdn.simpleicons.org/github/white'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/serin-tony/',
      icon: 'https://cdn.simpleicons.org/linkedin/0A66C2'
    },
    {
      name: 'Email',
      url: 'mailto:tony.s@northeastern.edu',
      icon: 'https://cdn.simpleicons.org/gmail/EA4335'
    },
    {
      name: 'TryHackMe',
      url: 'https://tryhackme.com/p/serintony',
      icon: 'https://cdn.simpleicons.org/tryhackme/88cc14'
    }
  ];

  // Navigation sections
  sections = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  currentSection: string = 'landing';
  isMobile: boolean = false;
  mobileMenuOpen: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkMobile();
    this.initializeScrollObserver();
  }

  /**
   * Toggle mobile menu
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Smooth scroll to section
   */
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = this.isMobile ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      if (this.mobileMenuOpen) {
        this.toggleMobileMenu();
      }
    }
  }

  /**
   * Scroll to top
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Track current section on scroll
   */
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (this.currentSection !== section.id) {
            this.currentSection = section.id;
            this.cdr.detectChanges();
          }
          break;
        }
      }
    }
  }

  /**
   * Check if device is mobile
   */
  @HostListener('window:resize', [])
  checkMobile(): void {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;
    
    // Close mobile menu if resizing to desktop
    if (wasMobile && !this.isMobile && this.mobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  /**
   * Initialize intersection observer for animations
   */
  private initializeScrollObserver(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all sections
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => observer.observe(section));
    }, 100);
  }
}