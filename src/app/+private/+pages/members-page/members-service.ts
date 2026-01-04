import { Injectable } from '@angular/core';
import { MembersItem } from './members-page';
import { BaseCRUDServise } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCRUDServise<MembersItem> {
  override data: MembersItem[] = [
    { id: 1, name: 'زهرا حسینی', address: 'همدان', national: '873664748', phone: 505330550 },
    { id: 2, name: 'ستایش احمدی', address: 'تهران', national: '8877829928', phone: 5009829280 },
    { id: 3, name: 'نگار میرزایی', address: 'ایلام', national: '63526883', phone: 7078262700 },
    { id: 4, name: 'الهام ارجمند', address: 'شهرکرد', national: '8366728972', phone: 13008726260 },
    { id: 5, name: 'حسنی مرزبان', address: 'تبریز', national: '187627287', phone: 10726527000 },
  ];
  override edit(destination: MembersItem, source: MembersItem): void {
    destination.name=source.name;
    destination.address=source.address;
    destination.national=source.national;
    destination.phone=source.phone;
  }
}
