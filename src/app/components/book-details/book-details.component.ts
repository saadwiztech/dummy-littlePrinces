import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  quantity: number = 1;
  constructor() {}

  ngOnInit(): void {}
  increment() {
    this.quantity += 1;
  }
  decrement() {
    if (this.quantity !== 0) {
      this.quantity -= 1;
    }
  }
}
