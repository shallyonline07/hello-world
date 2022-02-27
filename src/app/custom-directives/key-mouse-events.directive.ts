


import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyMouseEvents]'
})
export class KeyMouseEventsDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.width = '400px';
  }

  @HostListener('focusout') onFocusout() {
    this.el.nativeElement.style.width = '200px';
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('click') onclick() {
    console.log('You clicked inside custom directive input element');
  } 

}
