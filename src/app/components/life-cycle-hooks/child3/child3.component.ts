import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements
  OnChanges,
  OnInit
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy 
  {
    
  @Input('message') message: string;

  constructor() {
    // console.log('Child: Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child: OnChanges');
    console.log(changes.message);
    
  }

  ngOnInit(): void {
    console.log('Child: OnInit');
  }

  // ngDoCheck(): void {
  //   console.log('Child: DoCheck');
  // }

  // ngAfterContentInit(): void {
  //   console.log('Child: AfterContentInit');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('Child: AfterContentChecked');
  // }

  // ngAfterViewInit(): void {
  //   console.log('Child: AfterViewInit');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('Child: AfterViewChecked');
  // }
  
  // ngOnDestroy(): void {
  //   console.log('Child: OnDestroy');
  // }
}
