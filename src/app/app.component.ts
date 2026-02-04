import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anniversary-website';
  activePageIdx = 0;
  collageList = [
    {page: 0, url: 'assets/images/iti.jpg', class: 'pos-1'},
    {page: 0, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
    {page: 0, url: 'assets/images/rishi.jpg', class: 'pos-3'}
  ]

  goToPage(idx: number) {
    if (idx === 0) {
      this.collageList = [
        {page: 0, url: 'assets/images/iti.jpg', class: 'pos-1'},
        {page: 0, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
        {page: 0, url: 'assets/images/rishi.jpg', class: 'pos-3'}
      ];
      this.activePageIdx = 0;
    } else if (idx === 1) {
      this.collageList = [
        {page: 0, url: 'assets/images/iti.jpg', class: 'pos-1'},
        {page: 0, url: 'assets/images/cover_min.jpg', class: 'pos-2'},
        {page: 0, url: 'assets/images/rishi.jpg', class: 'pos-3'}
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
