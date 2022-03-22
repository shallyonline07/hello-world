import { OneComponent } from './one.component';

describe('OneComponent', () => {
  let component: OneComponent;
  const mockCommonServiceService: any = {
    updateName: jest.fn()
  };
  
  beforeEach(() => {
    component = new OneComponent(mockCommonServiceService);
  })

  it('should create component successfully', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call updateName', () => {
      component.ngOnInit();
      expect(mockCommonServiceService.updateName).toHaveBeenCalledTimes(1);
      expect(mockCommonServiceService.updateName).toHaveBeenCalledWith('maahi');
    });
  });
});
