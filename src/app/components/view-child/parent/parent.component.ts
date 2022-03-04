import { Component, ElementRef, OnInit, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild('child') childComp: ChildComponent;  // Sharing data b/w component example
  @ViewChild('para') paragraph: ElementRef;
  
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // console.log('onInit');
    // console.log(this.childComp);   // no value
    // console.log(this.paragraph);    // no value

    // // below will not work
    // this.childComp.computeSum(100, 200);
    // console.log(this.childComp.message);
  }

  ngAfterViewInit(): void {
    // console.log('after view init');
    // console.log(this.childComp);   // Value is there
    // console.log(this.paragraph);     // Value is there

    this.childComp.computeSum(100, 200);
    // console.log(this.childComp.message);
    this.changeDetectorRef.detectChanges();
  }

  calculateSum() {
    this.childComp.computeSum(10, 20);
  }

  applyStyles() {
    this.paragraph.nativeElement.style.color = 'red';
  }
  
}
