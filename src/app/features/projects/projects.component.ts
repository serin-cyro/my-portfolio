import { Component, OnInit } from '@angular/core';
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
export class ProjectsComponent implements OnInit {
  currentIndex: number = 0;
  totalProjects: number = 4;
  
  // Project data for indicators (can be expanded with more details)
  projects = [
    { id: 1, title: 'WMATA Metro Analysis' },
    { id: 2, title: 'Hybrid Deep Learning IDS' },
    { id: 3, title: 'Secure Reinsurance Platform' },
    { id: 4, title: 'Modern Portfolio Website' }
  ];

  // Auto-play settings (optional)
  autoPlayInterval: any;
  autoPlayEnabled: boolean = false;
  autoPlayDelay: number = 5000; // 5 seconds

  ngOnInit(): void {
    if (this.autoPlayEnabled) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextProject(): void {
    if (this.currentIndex < this.totalProjects - 2) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;  // Loop back to start
    }
    this.resetAutoPlay();
  }

  previousProject(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalProjects - 2;  // Loop to last pair
    }
    this.resetAutoPlay();
  }

  goToProject(index: number): void {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      if (this.currentIndex < this.totalProjects - 2) {
        this.nextProject();
      } else {
        this.currentIndex = 0; // Loop back to start
      }
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
    if (event.key === 'ArrowLeft') {
      this.previousProject();
    } else if (event.key === 'ArrowRight') {
      this.nextProject();
    }
  }

  getEndIndex(): number {
    return Math.min(this.currentIndex + 2, this.totalProjects);
  }


  getCurrentProjectNumbers(): string {
    const start = this.currentIndex + 1;
    const end = Math.min(this.currentIndex + 2, this.totalProjects);
    
    if (start === end) {
      return `${start}`;
    }
    return `${start}-${end}`;
  }

  getTransform(): string {
    const percentShift = this.currentIndex * 50;
    const gapShift = this.currentIndex * 1.5;
    return `translateX(calc(-${percentShift}% - ${gapShift}rem))`;
  }
}