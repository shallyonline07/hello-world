import { ContentComponent } from './content.component';
describe('ContentComponent', () => {
  let component: ContentComponent;

  beforeEach(() => {
    console.log('11111111');
    
    component = new ContentComponent(); // instantiate the class
  });

  it('should create component successfully', () => {
    expect(component).toBeTruthy();
  })

  describe('#toggleStatus', () => {
    it('should set the value of showStatus to true, if it was false', () => {
      component.showStatus = false;
      component.toggleStatus();
      expect(component.showStatus).toEqual(true);
    });

    it('should set the value of showStatus to false, if it was true', () => {
      component.showStatus = true;
      component.toggleStatus();
      expect(component.showStatus).toEqual(false);
    });
  });

  describe('#ngOnInit', () => {
    it('should set showStatus to false', () => {
      component.ngOnInit();
      expect(component.showStatus).toEqual(false);
    });

    it('should set studentData', () => {
      component.studentData = undefined;
      component.ngOnInit();
      expect(component.studentData).toEqual([
        {
          name: 'Maahi',
          age: 4,
          address: 'Bowmanville'
        },
        {
          name: 'Mishti',
          age: 12,
          address: 'Scarborough'
        },
      ]);
      // expect(component.studentData).toBeDefined();
    });
  });

});