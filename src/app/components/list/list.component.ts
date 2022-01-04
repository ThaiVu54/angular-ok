import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[]=[
    new Product('p01','hat'),
    new Product('p02','jeans'),
    new Product('p03','kaki'),
    new Product('p04','owen'),
  ]

  constructor() { }

  ngOnInit() {
  }


  changStarRating(message: string){
    console.log(`message: ${message}`);

  }
}
