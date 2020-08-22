import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDBListComponent } from './user-db-list.component';

describe('UserDBListComponent', () => {
  let component: UserDBListComponent;
  let fixture: ComponentFixture<UserDBListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDBListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
