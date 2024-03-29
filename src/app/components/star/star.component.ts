import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-star', //nhung cac thanh phan vao list de hien thi binh chon
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit, OnChanges {
  @Input()
  rating: number = 0;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.rating = 0;
  }

  rate() {
    console.log('Rating');

    this.ratingClicked.emit(`rating: ${this.rating}`);
  }
}
