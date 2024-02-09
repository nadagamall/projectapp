import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
  schemas: [NO_ERRORS_SCHEMA]

})
export class ProductlistComponent implements OnInit{
  prdlist:Iproduct[];
constructor(){
this.prdlist=[
  {id:100,name:'lenovopad',price:100 ,quantity:2,imgUrl:'https://fakeimg.pl/300/',categoryId:1},
  {id:200,name:'macbook',price:300 ,quantity:5,imgUrl:'https://fakeimg.pl/300/',categoryId:2},
  {id:300,name:'fujitsu',price:900 ,quantity:10,imgUrl:'https://fakeimg.pl/300/',categoryId:3},
  {id:400,name:'hb',price:400 ,quantity:5,imgUrl:'https://fakeimg.pl/300/',categoryId:4},  
  {id:500,name:'dell',price:390 ,quantity:3,imgUrl:'https://fakeimg.pl/300/',categoryId:5},



];
}
ngOnInit(): void {
  
}
}
