import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es6FeaturesComponent } from './es6-features.component';

describe('Es6FeaturesComponent', () => {
  let component: Es6FeaturesComponent;
  let fixture: ComponentFixture<Es6FeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es6FeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
