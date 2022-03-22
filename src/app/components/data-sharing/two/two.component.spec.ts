import { TwoComponent } from './two.component';
import { of } from 'rxjs';
import { fakeAsync, flush } from '@angular/core/testing';

describe('TwoComponent', () => {
  let component: TwoComponent;
  
  const mockCommonServiceService: any = {
    name$: of('test name')
  }

  beforeEach(() => {
    component = new TwoComponent(mockCommonServiceService);
  })

  it('should create component successfully', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnDestroy', () => {
    it('should call unsubscribe', () => {
      jest.spyOn(component.sub, 'unsubscribe').mockImplementation(() => {});
      component.ngOnDestroy();
      expect(component.sub.unsubscribe).toHaveBeenCalledTimes(1);
    })
  })

  describe('#ngOnInit', () => {
    it('should set studentName', fakeAsync(() => {
      component.ngOnInit();
      flush();
      expect(component.studentName).toEqual('test name');
    }))
  });
  
});
