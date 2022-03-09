import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTypesComponent } from './observable-types.component';

describe('ObservableTypesComponent', () => {
  let component: ObservableTypesComponent;
  let fixture: ComponentFixture<ObservableTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
