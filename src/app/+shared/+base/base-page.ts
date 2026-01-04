import { BaseCRUDServise } from "./base-service";
import { Thing } from "./base-thing";

export class BassCRUDPage<T extends Thing>{
  dataServise! : BaseCRUDServise<T>;
  data: T[] = [];
  action: string = 'list';
  item!:T;
  refreshData() {
    this.data = this.dataServise.list();
  }
  add() {
    this.addPrepair();
    this.action = 'add';
  }
  addPrepair(){

  }
  edit(item: T) {
    this.item = { ...item}
    this.action = 'edit'
  }
  remove(item:T){
    this.item={...item};
    this.action='remove'
  }
  cancel() {
    this.action = 'list'
  }
  save() {
    if (this.action == 'add') {
      this.dataServise.add(this.item);
    }
    else if (this.action == 'edit') {
      this.dataServise.update(this.item);
    }
    else if(this.action=='remove'){
      this.dataServise.remove(this.item);
    }
    this.refreshData();
    this.action = 'list';
  }
}
  