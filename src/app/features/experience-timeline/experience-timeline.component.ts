import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
        marginTop: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        overflow: 'visible',
        marginTop: '1.5rem'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class ExperienceTimelineComponent {
  // Track which items are expanded using a Set
  expandedItems: Set<number> = new Set();

  /**
   * Toggle expansion state of a timeline item
   */
  toggleExpand(index: number): void {
    if (this.expandedItems.has(index)) {
      this.expandedItems.delete(index);
    } else {
      this.expandedItems.add(index);
    }
    // Force change detection by creating new Set reference
    this.expandedItems = new Set(this.expandedItems);
  }

  /**
   * Check if an item is expanded
   */
  isExpanded(index: number): boolean {
    return this.expandedItems.has(index);
  }

  /**
   * Expand all items
   */
  expandAll(): void {
    this.expandedItems = new Set([0, 1, 2, 3]);
  }

  /**
   * Collapse all items
   */
  collapseAll(): void {
    this.expandedItems.clear();
  }
}