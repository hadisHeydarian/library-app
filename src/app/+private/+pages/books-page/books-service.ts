import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data:BookItem[]=[
      {id:1, titel:'برنامه نویسی',writer:'خودم', publisher:'خودش', price:5000},
      {id:2, titel:'داده کاوی',writer:'خودم', publisher:'خودش', price:5000},
      {id:3, titel:'پایگاه داده',writer:'خودم', publisher:'خودش', price:7000},
      {id:4, titel:'ساختمان داده',writer:'خودم', publisher:'خودش', price:13000},
      {id:5, titel:'مدار های منطقی',writer:'خودم', publisher:'خودش', price:10000},
    ];
    
    add(book:BookItem){
      this.data.push(book);
    }
    list(){
        return [...this.data];
      }
      update(){
        
      }
      remove(){

      }
}
