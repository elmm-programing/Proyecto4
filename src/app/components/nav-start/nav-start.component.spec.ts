import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStartComponent } from './nav-start.component';

describe('NavStartComponent', () => {
  let component: NavStartComponent;
  let fixture: ComponentFixture<NavStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
