import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDpartmentComponent } from './update-dpartment.component';

describe('UpdateDpartmentComponent', () => {
  let component: UpdateDpartmentComponent;
  let fixture: ComponentFixture<UpdateDpartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDpartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDpartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
