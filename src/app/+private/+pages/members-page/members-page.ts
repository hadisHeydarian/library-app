import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {

  membersService = inject(MembersService);
  data: MembersItem[] = [];
  action: string = 'list';
  item: MembersItem = {
    id: 0,
    name: '',
    address: '',
    national: '',
    phone: 0,
  }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData() {
    this.data = this.membersService.list();
  }

  add() {
    this.action = 'add';
    this.item = {
      id: 0,
      name: '',
      address: '',
      national: '',
      phone: 0,
    }
  }
  edit(member:MembersItem) {
    this.item = { ...member}
    this.action = 'edit'
  }
  remove(member:MembersItem) {
    this.item = { ...member};
    this.action = 'remove'
  }
  cancel() {
    this.action = 'list'
  }
  save() {
    if (this.action == 'add') {
    this.membersService.add(this.item);
    }
     else if (this.action == 'edit') {
      this.membersService.update(this.item);
    }
    else if (this.action == 'edit') {
      this.membersService.update(this.item);
    }
    else if(this.action=='remove'){
      this.membersService.remove(this.item);
    }
    this.refreshData();
    this.action = 'list';
  }
}
export interface MembersItem {
  id?: number;
  name: string;
  address: string;
  national: string;
  phone?: number;
}
