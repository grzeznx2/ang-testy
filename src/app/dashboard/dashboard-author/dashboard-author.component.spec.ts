import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAuthorComponent } from './dashboard-author.component';

describe('DashboardAuthorComponent', () => {
  let component: DashboardAuthorComponent;
  let fixture: ComponentFixture<DashboardAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
