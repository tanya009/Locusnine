import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDBComponent } from './users-db.component';

describe('UsersDBComponent', () => {
  let component: UsersDBComponent;
  let fixture: ComponentFixture<UsersDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
