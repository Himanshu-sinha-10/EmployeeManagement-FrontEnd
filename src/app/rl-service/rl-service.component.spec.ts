import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlServiceComponent } from './rl-service.component';

describe('RlServiceComponent', () => {
  let component: RlServiceComponent;
  let fixture: ComponentFixture<RlServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RlServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
