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
      update(book:BookItem){
        const index=this.data.findIndex(b=>b.id==book.id);
        if(index!=-1){
          this.data[index].titel=book.titel;
          this.data[index].writer=book.writer;
          this.data[index].publisher=book.publisher;
          this.data[index].price=book.price;
        }
      }
      remove(book:BookItem){
        this.data=this.data.filter(m=>m.id!=book.id);
      }
}
