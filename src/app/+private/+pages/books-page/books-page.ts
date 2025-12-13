import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  imports: [],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage {
  data:BookItem[]=[
    {id:1, titel:'برنامه نویسی',writer:'خودم', publisher:'خودش', price:5000},
    {id:2, titel:'داده کاوی',writer:'خودم', publisher:'خودش', price:5000},
    {id:3, titel:'پایگاه داده',writer:'خودم', publisher:'خودش', price:7000},
    {id:4, titel:'ساختمان داده',writer:'خودم', publisher:'خودش', price:13000},
    {id:5, titel:'مدار های منطقی',writer:'خودم', publisher:'خودش', price:10000},
  ];
  add(){
    this.data.push({id:6, titel:'ازمایش', writer:'ازمایش', publisher:'', price:12000})
  }
}
export interface BookItem{
  id:number;
  titel:string;
  writer:string;
  publisher:string;
  price:number;
}
