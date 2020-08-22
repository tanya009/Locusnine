import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDBComponent } from './user-db.component';

describe('UserDBComponent', () => {
  let component: UserDBComponent;
  let fixture: ComponentFixture<UserDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
