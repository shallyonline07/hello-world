import { of } from 'rxjs';
import { JsonServerExampleComponent, Student } from './json-server-example.component';
import { fakeAsync, flush } from '@angular/core/testing';

describe('JsonServerExampleComponent', () => {
  let component: JsonServerExampleComponent;
  const mockStudentData: Student[] = [
    {
      "name": "Alex",
      "age": 6,
      "address": "Bowmanville"
    },
    {
      "name": "Julia",
      "age": 3,
      "address": "Scarborough"
    }
  ];
  const mockCommonServiceService: any = {
    getStudents: jest.fn().mockReturnValue(of(mockStudentData))
  }

  beforeEach(() => {
    component = new JsonServerExampleComponent(mockCommonServiceService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call getStudents() and should set data', fakeAsync(() => {
      component.ngOnInit();
      flush();
      expect(component.data).toEqual(mockStudentData);
    }));
  })
});
