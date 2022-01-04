import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {


  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      'productCode': new FormControl(null, Validators.required),
      'productName': new FormControl('Louis Vuitton', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onsSubmit() {
    if (this.productForm.invalid) {
      console.log('invalid data');
      // alert('tạo không thành công')
      return;
    }
    console.log(this.productForm.value);
    // alert('tạo thành công')
  }

  ngOnInit(): void {}
}
