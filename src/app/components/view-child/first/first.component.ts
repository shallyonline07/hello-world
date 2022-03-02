import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, AfterViewInit {
  @ViewChild('second') secondComp: SecondComponent;  // Sharing data b/w component example
  @ViewChild('para') paragraph: ElementRef;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.secondComp);   // no value
    console.log(this.paragraph);    // no value

    // // below will not work
    // this.secondComp.computeSum(100, 200);
    // console.log(this.secondComp.message);
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.secondComp);   // Value is there
    console.log(this.paragraph);     // Value is there

    this.paragraph.nativeElement.style.color = 'red';
    
    this.secondComp.computeSum(100, 200);
    console.log(this.secondComp.message);
    this.changeDetectorRef.detectChanges();
  }

  calculateSum() {
    this.secondComp.computeSum(10, 20);
  }

}
