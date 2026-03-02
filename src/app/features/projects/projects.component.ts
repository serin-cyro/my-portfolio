import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  currentIndex: number = 0;
  expandedIndex: number | null = null; // tracks which card is expanded on mobile

  projects = [
    { id: 1, title: 'Rivian OSINT & Threat Intelligence' },
    { id: 2, title: 'WMATA Metro Analysis' },
    { id: 3, title: 'Hybrid Deep Learning IDS' },
    { id: 4, title: 'Secure Reinsurance Platform' },
    { id: 5, title: 'Modern Portfolio Website' }
  ];

  // ── Derived automatically from the projects array ──────────────────────────
  get totalProjects(): number {
    return this.projects.length;
  }

  // 1 card on mobile (≤1024px), 2 on desktop
  isMobile: boolean = false;

  get slidesPerView(): number {
    return this.isMobile ? 1 : 2;
  }

  // Max index we can scroll to
  get maxIndex(): number {
    return this.totalProjects - this.slidesPerView;
  }

  // Dot indicators — one per possible position
  get indicatorRange(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }

  autoPlayInterval: any;
  autoPlayEnabled: boolean = false;
  autoPlayDelay: number = 5000;

  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private readonly swipeThreshold: number = 50;

  ngOnInit(): void {
    this.checkMobile();
    if (this.autoPlayEnabled) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  toggleExpand(index: number): void {
    if (!this.isMobile) return; // only works on mobile
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  onCarouselScroll(event: Event): void {
    if (!this.isMobile) return;
    const track = event.target as HTMLElement;
    const scrollLeft = track.scrollLeft;

    const firstSlide = track.querySelector('.carousel-slide') as HTMLElement;
    const cardWidth = firstSlide ? firstSlide.offsetWidth + 16 : track.clientWidth * 0.85 + 16;

    this.currentIndex = Math.min(
      Math.round(scrollLeft / cardWidth),
      this.totalProjects - 1
    );
    this.expandedIndex = null;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (scrollLeft >= maxScroll - 5 && this.currentIndex === this.totalProjects - 1) {
      setTimeout(() => {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        this.currentIndex = 0;
      }, 400);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    const wasMobile = this.isMobile;
    this.checkMobile();
    // Reset index if switching between mobile/desktop to avoid out-of-bounds
    if (wasMobile !== this.isMobile) {
      this.currentIndex = 0;
    }
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth <= 1024;
  }

  nextProject(): void {
    this.currentIndex = this.currentIndex < this.maxIndex
      ? this.currentIndex + 1
      : 0;
    this.resetAutoPlay();
  }

  previousProject(): void {
    this.currentIndex = this.currentIndex > 0
      ? this.currentIndex - 1
      : this.maxIndex;
    this.resetAutoPlay();
  }

  goToProject(index: number): void {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextProject();
    }, this.autoPlayDelay);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetAutoPlay(): void {
    if (this.autoPlayEnabled) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') this.previousProject();
    else if (event.key === 'ArrowRight') this.nextProject();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent): void {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    const deltaY = event.changedTouches[0].clientY - this.touchStartY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.swipeThreshold) {
      if (deltaX < 0) this.nextProject();
      else this.previousProject();
    }
  }

  getCurrentProjectNumbers(): string {
    const start = this.currentIndex + 1;
    const end = Math.min(this.currentIndex + this.slidesPerView, this.totalProjects);
    if (start === end) return `${start}`;
    return `${start}-${end}`;
  }

  getTransform(): string {
    if (this.isMobile) {
      return 'none'; // CSS scroll snap handles it on mobile
    }
    return `translateX(calc(${this.currentIndex} * (-50% - 0.25rem)))`;
  }
  openLink(url: string): void {
    window.open(url, '_blank');
  }
}