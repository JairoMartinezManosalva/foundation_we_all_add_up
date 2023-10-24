import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTopComponent } from './container-top.component';

describe('ContainerTopComponent', () => {
  let component: ContainerTopComponent;
  let fixture: ComponentFixture<ContainerTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerTopComponent]
    });
    fixture = TestBed.createComponent(ContainerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
