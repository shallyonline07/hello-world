import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStructureComponent } from './angular-structure.component';

describe('AngularStructureComponent', () => {
  let component: AngularStructureComponent;
  let fixture: ComponentFixture<AngularStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
