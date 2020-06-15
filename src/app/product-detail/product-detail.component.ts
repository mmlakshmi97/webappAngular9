import { Component, OnInit } from '@angular/core';
import { Service2Service } from "../service2.service";
import { class1 } from "../class1";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  product: class1 = new class1(-1,'No Product');
  constructor(private productService: Service2Service) { }
  ngOnInit() {
    this.productService.getProduct(1).subscribe((product: class1) =>{
      this.product = product;
    })
  }

}
