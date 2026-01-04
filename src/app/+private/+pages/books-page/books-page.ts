import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { BaseCrudComponent, Column } from '../../../+shared/+base/base-crud-component/base-crud-component';
import { Thing } from '../../../+shared/+base/base-thing';
import { BassCRUDPage } from '../../../+shared/+base/base-page';
@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BassCRUDPage<BookItem> implements OnInit {
  override dataServise=inject(BooksService);
  ngOnInit(): void {
    this.refreshData();
    this.item={
      titel:'',
      publisher:'',
      writer:''
    }
  }
  override addPrepair(): void{
    this.item={
      titel:'',
      publisher:'',
      writer:''
    };
  }
  colunmns:Column[]=[
    {field:'id',title:'شناسه'},
    {field:'title',title:'عنوان'},
    {field:'writer',title:'نویسنده'},
    {field:'publisher',title:'ناشر'},
    {field:'price',title:'قیمت'}
  ];
}
export interface BookItem extends Thing {
  titel: string;
  writer: string;
  publisher: string;
  price?: number;
}
