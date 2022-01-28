import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any;
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.images = [
      { picture: '../../../assets/images/photo-book.png' },
      { picture: '../../../assets/images/photo-book.png' },
      { picture: '../../../assets/images/photo-book.png' },
      {
        picture: '../../../assets/images/photo-book.png',
      },
      { picture: '../../../assets/images/photo-book.png' },
      {
        picture: '../../../assets/images/photo-book.png',
      },
    ];
  }
}
