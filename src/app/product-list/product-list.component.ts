import { Component, OnInit } from '@angular/core';
import { Service2Service } from "../service2.service";
import { class1 } from "../class1";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products: class1[] = [];
  constructor(private productService: Service2Service) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: class1[])=>{
      this.products = products;
    })
  }

}
