import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCRUDServise } from '../../../+shared/+base/base-service';
import { BaseCrudComponent, Column } from '../../../+shared/+base/base-crud-component/base-crud-component';
import { BassCRUDPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BassCRUDPage<MembersItem> implements OnInit {
  override dataServise = inject(MembersService);
  ngOnInit(): void {
    this.refreshData();
    this.item = {
      name: '',
      address: '',
      national: '',
      phone: ''
    };
  }
  override addPrepair(): void {
    this.item = {
      name: '',
      address: '',
      national: '',
      phone: ''
    };
  }
    colunmns: Column[] = [
      { field: 'id', title: 'شناسه' },
      { field: 'name', title: 'نام' },
      { field: 'address', title: 'ادرس' },
      { field: 'national', title: 'کدملی' },
      { field: 'phone', title: 'تلفن' },
    ]
  }
  

    export interface MembersItem extends Thing {
      name: string;
      address: string;
      national: string;
      phone: string;
    }