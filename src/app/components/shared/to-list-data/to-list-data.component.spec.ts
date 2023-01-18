import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToListDataComponent } from './to-list-data.component';

describe('ToListDataComponent', () => {
  let component: ToListDataComponent;
  let fixture: ComponentFixture<ToListDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToListDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
