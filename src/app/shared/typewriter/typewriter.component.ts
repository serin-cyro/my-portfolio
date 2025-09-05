
import { Component, Input, signal, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'typewriter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="tw-text">{{ text() }}</span>
    <span *ngIf="cursor" class="tw-cursor">|</span>
  `,
  styles: [`
    :host { white-space: pre; }
    .tw-cursor {
      display: inline-block;
      animation: tw-blink 1s step-end infinite;
      font-weight: 500;
    }
    @keyframes tw-blink {
      0%, 50% { opacity: 1; }
      50.01%, 100% { opacity: 0; }
    }
  `]
})
export class TypewriterComponent implements OnInit, OnDestroy {
  @Input({ required: true }) texts: string[] = [];
  @Input() typeSpeed = 80;
  @Input() deleteSpeed = 40;
  @Input() pause = 1200;
  @Input() loop = true;
  @Input() cursor = true;
  @Input() startIndex = 0;
  readonly text = signal('');
  private destroyed = false;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  private sleep(ms: number) {
    return new Promise<void>(r => setTimeout(r, ms));
  }

  private async typeOne(text: string) {
    for (let i = 1; i <= text.length && !this.destroyed; i++) {
      this.text.set(text.slice(0, i));
      await this.sleep(this.typeSpeed);
    }
  }

  private async deleteOne(text: string) {
    for (let i = text.length; i >= 0 && !this.destroyed; i--) {
      this.text.set(text.slice(0, i));
      await this.sleep(this.deleteSpeed);
    }
  }

  private async start() {
    if (!this.texts?.length) return;

    let idx = Math.max(0, Math.min(this.startIndex, this.texts.length - 1));

    while (!this.destroyed) {
      const word = this.texts[idx];

      await this.typeOne(word);
      if (this.destroyed) break;

      await this.sleep(this.pause);
      if (this.destroyed) break;

      const isLast = idx === this.texts.length - 1;
      if (!this.loop && isLast) break;

      await this.deleteOne(word);
      if (this.destroyed) break;

      idx = (idx + 1) % this.texts.length;
    }
  }
}
