import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  quantity: number = 1;
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
      { picture: '../../../assets/images/carosal/4.svg' },
      {
        picture: '../../../assets/images/carosal/ourange-photobook 5.svg',
      },
      {
        picture:
          '../../../assets/images/carosal/premiumpb-gallery-box-portrait 2.svg',
      },
      {
        picture: '../../../assets/images/carosal/page 9 2.svg',
      },

      {
        picture:
          '../../../assets/images/carosal/Front Cover Book Version 2(2) 2.svg',
      },

      {
        picture:
          '../../../assets/images/carosal/premiumpb-gallery-box-portrait 2.svg',
      },
    ];
  }
  increment() {
    this.quantity += 1;
  }
  decrement() {
    if (this.quantity !== 0) {
      this.quantity -= 1;
    }
  }
}
