import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements 
                                  OnChanges,
                                  OnInit,
                                  DoCheck,
                                  AfterContentInit,
                                  AfterContentChecked,
                                  AfterViewInit,
                                  AfterViewChecked,
                                  OnDestroy 
{
  info: string = 'AAA';
  info1: string = 'BBB';

  constructor() {
    console.log('Parent: Constructor');
  }

  ngOnChanges(): void {
    console.log('Parent: OnChanges');
  }

  ngOnInit(): void {
    console.log('Parent: OnInit');
  }

  ngDoCheck(): void {
    console.log('Parent: DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Parent: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Parent: AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Parent: AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Parent: AfterViewChecked');
  }
  
  ngOnDestroy(): void {
    console.log('Parent: OnDestroy');
  }


  updateMessage() {
    this.info = this.info + '1';
    
  }

}
