import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-experience-timeline',
  imports: [MatIconModule],
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.scss'
})
export class ExperienceTimelineComponent {
  experienceTimeline = [
    {
      title: 'MS in Cybersecurity',
      role: 'Graduate Student',
      year: '2025 - Present',
      organization: 'Friedrich-Alexander University Erlangen-Nürnberg (FAU)',
      description: 'Specializing in threat detection, cloud security, and zero trust architecture.'
    },
    {
      title: 'UI Developer',
      role: 'Software Engineer',
      year: '2022 - Present',
      organization: 'Tata Consultancy Services',
      description: 'Developing sleek, performant UIs and optimizing large-scale reinsurance workflows.'
    },
    {
      title: 'B.Tech in Computer Science',
      role: 'Undergraduate',
      year: '2018 - 2022',
      organization: 'Mahatma Gandhi University',
      description: 'Graduated with strong fundamentals in data structures, networks, and AI-based IDS.'
    }
  ];
ngAfterViewInit() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });
}


}
