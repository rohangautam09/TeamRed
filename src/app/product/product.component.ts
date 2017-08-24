import { IProduct } from './product';
import { ProductService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-product',
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 iproduct:IProduct[];
  constructor(private _product:ProductService) { }

  ngOnInit(): void  {
    this._product.getproducts()
    .subscribe(IProduct=>{
      this.iproduct=IProduct;
    })
  }

}
