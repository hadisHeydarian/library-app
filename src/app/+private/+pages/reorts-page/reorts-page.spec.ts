import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReortsPage } from './reorts-page';

describe('ReortsPage', () => {
  let component: ReortsPage;
  let fixture: ComponentFixture<ReortsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReortsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReortsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
