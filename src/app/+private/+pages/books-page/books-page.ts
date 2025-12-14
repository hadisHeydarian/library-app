import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-books-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {

  booksService = inject(BooksService);
  data: BookItem[] = [];
  action: string = 'list';
  item: BookItem = {
    id: 0,
    titel: '',
    writer: '',
    publisher: '',
    price: 0,
  }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData() {
    this.data = this.booksService.list();
  }
  add() {
    this.action = 'add';
    this.item = {
    id: 0,
    titel: '',
    writer: '',
    publisher: '',
    price: 0,
  }
  }
  cancel() {
    this.action == 'list'
  }
  save() {
    this.booksService.add(this.item);
    this.refreshData();
    this.action = 'list';
  }
}
export interface BookItem {
  id: number;
  titel: string;
  writer: string;
  publisher: string;
  price: number;
}
