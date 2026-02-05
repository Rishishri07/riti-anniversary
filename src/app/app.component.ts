import { Component, HostListener, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'anniversary-website';
  activePageIdx = 0;
  displaySize = { width: 0, height: 0 };
  collageList = [
    {page: 11, url: 'assets/images/iti.jpg', class: 'pos-1'},
    {page: 12, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
    {page: 13, url: 'assets/images/rishi.jpg', class: 'pos-3'}
  ];
  isEvasive = false;
  showSuccess = false;

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  @ViewChild('noBtn') noBtn!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {

  }

  onYesClick(): void {
    this.showSuccess = true;
    // Hide the No button once they say Yes
    this.renderer.setStyle(this.noBtn.nativeElement, 'display', 'none');
  }
unmute() {
  this.audio.nativeElement.muted = false;
}


  ngOnInit() {
    this.updateDisplaySize();
  }

  ngAfterViewInit() {
    this.unmute();
  this.audio.nativeElement.play();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDisplaySize();
  }

  private updateDisplaySize() {
    if (typeof window === 'undefined') return;
    this.displaySize = { width: window.innerWidth, height: window.innerHeight };
  }

  goToPage(idx: number) {
    if (idx === 0) {
      this.collageList = [
        {page: 11, url: 'assets/images/iti.jpg', class: 'pos-1'},
        {page: 12, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
        {page: 13, url: 'assets/images/rishi.jpg', class: 'pos-3'}
      ];
      this.activePageIdx = 0;
    } else if (idx === 1) {
      this.collageList = [
        {page: 21, url: 'assets/images/iti_2.jpg', class: 'pos-1'},
        {page: 22, url: 'assets/images/riti.jpg', class: 'pos-2'},
        {page: 23, url: 'assets/images/rishi_2.jpg', class: 'pos-3'}
      ];
      this.activePageIdx = 1;
    } else if (idx === 2) {
      this.collageList = [
        {page: 31, url: 'assets/images/iti_4.jpg', class: 'pos-1'},
        {page: 32, url: 'assets/images/riti_2.jpg', class: 'pos-2'},
        {page: 33, url: 'assets/images/riti_3.jpg', class: 'pos-3'}
      ];
      this.activePageIdx = 2;
    }
  }

  moveButton(): void {
    const btn = this.noBtn.nativeElement;

    // 1. Break the button out of the layout on first hover
    if (!this.isEvasive) {
      this.isEvasive = true;
      this.renderer.setStyle(btn, 'position', 'fixed');
      this.renderer.setStyle(btn, 'z-index', '1000');
      this.renderer.setStyle(btn, 'height', '2.5rem');
    }

    // 2. Calculate safe boundaries
    const padding = 20;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    // 3. Generate random coordinates
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // 4. Apply styles via Renderer2 (Angular best practice)
    this.renderer.setStyle(btn, 'left', `${randomX}px`);
    this.renderer.setStyle(btn, 'top', `${randomY}px`);
  }
}
