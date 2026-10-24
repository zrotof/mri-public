import { Component, HostListener, OnDestroy, OnInit, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ShareService } from '../../../core/services/share/share.service';

@Component({
  selector: 'app-share-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share-modal.component.html',
  styleUrl: './share-modal.component.scss'
})
export class ShareModalComponent implements OnInit, OnDestroy {
  readonly shareService = inject(ShareService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly copied = signal<boolean>(false);
  readonly canNativeShare = signal<boolean>(false);
  private copyTimer: any = null;

  readonly shareUrl = computed<string>(() => {
    const d = this.shareService.data();
    if (d?.url) return d.url;
    if (this.isBrowser) return window.location.href;
    return 'https://mri-renovation.fr';
  });

  readonly shareText = computed<string>(() => {
    const d = this.shareService.data();
    if (!d) return 'Découvrez cette réalisation par Rénovation Immobilière MRI';
    const loc = d.location ? ` (${d.location})` : '';
    return `Découvrez cette réalisation d'exception : ${d.title}${loc} par MRI Rénovation`;
  });

  constructor() {
    effect(() => {
      const open = this.shareService.isOpen();
      if (this.isBrowser) {
        if (open) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.isBrowser && typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      this.canNativeShare.set(true);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.body.classList.remove('no-scroll');
    }
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
  }

  close(): void {
    this.shareService.close();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.shareService.isOpen()) {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('share-modal-backdrop')) {
      this.close();
    }
  }

  async copyLink(): Promise<void> {
    if (!this.isBrowser) return;
    try {
      await navigator.clipboard.writeText(this.shareUrl());
      this.copied.set(true);
      if (this.copyTimer) clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(false), 2500);
    } catch (err) {
      console.error('Clipboard copy error', err);
    }
  }

  shareWhatsApp(): void {
    if (!this.isBrowser) return;
    const text = `${this.shareText()}\n${this.shareUrl()}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  shareEmail(): void {
    if (!this.isBrowser) return;
    const subject = this.shareService.data()?.title || 'Réalisation MRI Rénovation';
    const body = `${this.shareText()}\n\nDécouvrez tous les détails et photos du projet sur :\n${this.shareUrl()}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  shareLinkedIn(): void {
    if (!this.isBrowser) return;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.shareUrl())}`, '_blank', 'noopener,noreferrer');
  }

  shareFacebook(): void {
    if (!this.isBrowser) return;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.shareUrl())}`, '_blank', 'noopener,noreferrer');
  }

  async triggerNativeShare(): Promise<void> {
    if (!this.isBrowser || !navigator.share) return;
    try {
      await navigator.share({
        title: this.shareService.data()?.title || 'MRI Rénovation',
        text: this.shareText(),
        url: this.shareUrl()
      });
    } catch {
      // Annulation utilisateur normale
    }
  }
}
