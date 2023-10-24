import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBottomComponent } from './container-bottom.component';

describe('ContainerBottomComponent', () => {
  let component: ContainerBottomComponent;
  let fixture: ComponentFixture<ContainerBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerBottomComponent]
    });
    fixture = TestBed.createComponent(ContainerBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
