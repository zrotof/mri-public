import { Injectable, signal } from '@angular/core';

export interface ShareProjectData {
  title: string;
  location?: string;
  imageUrl?: string;
  url?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  readonly isOpen = signal<boolean>(false);
  readonly data = signal<ShareProjectData | null>(null);

  open(data: ShareProjectData): void {
    this.data.set(data);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
