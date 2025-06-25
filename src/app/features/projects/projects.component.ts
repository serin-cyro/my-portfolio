import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatExpansionModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectTimeline = [
    {
      title: 'Portfolio Website',
      role: 'UI Developer',
      period: '2025',
      description: 'Interactive Angular portfolio with particles, dark theme, and scroll animations.',
      organization: 'Personal',
      details: 'Angular 19 standalone architecture, GitHub Pages deployment, responsive across devices.'
    },
    {
      title: 'Intrusion Detection System Using Hybrid Deep Learning',
      role: 'Capstone Project',
      period: '2022',
      description: 'Built and trained a hybrid CNN-LSTM model for real-time IDS.',
      organization: 'B Tech Computer Science',
      details: 'Implemented deception grids, anomaly detection with LSTM, and integrated with Azure Sentinel.'
    },
    {
      title: 'Hitch a Ride -Flutter Application',
      role: 'Flutter Developer',
      period: '2021',
      description: 'A ride sharing application that helps drivers and riders connect with each other',
      organization: 'Personal',
      details: 'Passenger-Driver Matching: Algorithm for detecting and pairing users going to similar destinations'
    },
    {
      title: 'Day Track',
      role: 'Flutter Developer',
      period: '2020',
      description: 'A tracking application to get the count of people visiting a place during Covid-19',
      organization: 'Bytehead Internship',
      details: 'Daily Summary: Users can track their personal visit patterns with visual summaries.Alerts for exceeding visitor thresholds if needed.'
    }
  ];
}
