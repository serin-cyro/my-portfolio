import { Component, OnInit, HostListener, ChangeDetectorRef, OnDestroy } from '@angular/core';
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
import { trigger, transition, style, animate } from '@angular/animations';

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
export class LandingComponent implements OnInit, OnDestroy {
  roles = [
    'Security Engineer',
    'AppSec Specialist',
    'Cloud Security Expert',
    'Threat Hunter',
    'Full-Stack Developer'
  ];

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
    // Update current section on load
    setTimeout(() => this.updateCurrentSection(), 500);
  }

  ngOnDestroy(): void {
    // Clean up if needed
    document.body.style.overflow = '';
  }

  /**
   * Toggle mobile menu
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    console.log('Mobile menu open:', this.mobileMenuOpen); // Debug
  }

  /**
   * Smooth scroll to section
   */
  scrollTo(sectionId: string): void {
    console.log('Scrolling to:', sectionId); // Debug
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      const wasMenuOpen = this.mobileMenuOpen;
      if (this.mobileMenuOpen) {
        this.toggleMobileMenu();
      }

      // Scroll after menu closes
      const delay = wasMenuOpen ? 350 : 0;
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active section immediately
        this.currentSection = sectionId;
        this.cdr.detectChanges();
      }, delay);
    } else {
      console.error(`Section not found: ${sectionId}`);
    }
  }

  /**
   * Scroll to top
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.currentSection = 'landing';
  }

  /**
   * Track current section on scroll
   */
  @HostListener('window:scroll', [])
  onScroll(): void {
    // Call update immediately for responsive feeling
    this.updateCurrentSection();
  }

  /**
   * Update which section is currently in view
   */
  private updateCurrentSection(): void {
    // Use top of viewport + small offset (accounts for navbar)
    const scrollPosition = window.scrollY + 120;
    
    let foundSection = 'landing';
    
    // Check sections in reverse order (bottom to top)
    // This ensures the correct section is highlighted when between sections
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      const element = document.getElementById(section.id);
      
      if (element) {
        const elementTop = element.offsetTop;
        
        if (scrollPosition >= elementTop) {
          foundSection = section.id;
          break;
        }
      }
    }
    
    if (this.currentSection !== foundSection) {
      this.currentSection = foundSection;
      this.cdr.detectChanges();
      console.log('Active section:', foundSection); // Debug
    }
  }

  /**
   * Check if device is mobile
   */
  @HostListener('window:resize', [])
  checkMobile(): void {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;
    
    console.log('Is mobile:', this.isMobile); // Debug
    
    if (wasMobile && !this.isMobile && this.mobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }
}