import { ContainerTemplateComponent } from './container-template.component';

describe('ContainerTemplateComp', () => {
  let component: ContainerTemplateComponent;
  beforeEach(() => {
    component = new ContainerTemplateComponent();
  });
  it('should create component successfully', () => {
    expect(component).toBeTruthy();
  });

  describe('#computeSum', () => {
    it('should return the computed sum', () => {
      const sum = component.computeSum(100, 200);
      expect(sum).toEqual(300)
    })
  });

  describe('#ngOnInit', () => {
    it('should call computeSum() function twice', () => {
      jest.spyOn(component, 'computeSum').mockReturnValue(99);
      component.ngOnInit();
      expect(component.computeSum).toHaveBeenCalledTimes(2);
    })
  });

});
