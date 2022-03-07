import { TestBed } from '@angular/core/testing';

import { Feature1Guard } from './feature1.guard';

describe('Feature1Guard', () => {
  let guard: Feature1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Feature1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
