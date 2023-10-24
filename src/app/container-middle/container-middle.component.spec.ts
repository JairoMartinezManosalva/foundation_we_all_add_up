import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMiddleComponent } from './container-middle.component';

describe('ContainerMiddleComponent', () => {
  let component: ContainerMiddleComponent;
  let fixture: ComponentFixture<ContainerMiddleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerMiddleComponent]
    });
    fixture = TestBed.createComponent(ContainerMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
