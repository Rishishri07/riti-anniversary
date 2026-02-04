import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anniversary-website';
  activePageIdx = 0;
  displaySize = { width: 0, height: 0 };
  collageList = [
    {page: 0, url: 'assets/images/iti.jpg', class: 'pos-1'},
    {page: 0, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
    {page: 0, url: 'assets/images/rishi.jpg', class: 'pos-3'}
  ]

  ngOnInit() {
    this.updateDisplaySize();
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
        {page: 0, url: 'assets/images/iti.jpg', class: 'pos-1'},
        {page: 0, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
        {page: 0, url: 'assets/images/rishi.jpg', class: 'pos-3'}
      ];
      this.activePageIdx = 2;
    }
  }
}
