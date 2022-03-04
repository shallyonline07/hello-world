import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.scss']
})
export class DirectivesExampleComponent implements OnInit {
  fruit = '';
  student = [{name: "ankush", age: 10}];
  student1 = [{name:'ankush',age:40}];
  age = 20;

  classNames = {
    'text-primary bg-dark size': this.age === 20,
    'text-danger': this.age > 20
  };

  styleNames = {
    'color' : this.age > 20 ? 'purple' : 'green',
    'font-size' : this.age > 20 ? '10px' : '24px',
  }

  constructor() { }

  

  ngOnInit(): void {
    let name = 'mishti';
    switch (name) {
      case 'maahi':
        // console.log('matched ' + name);
        break;
      case 'mishti':
        // console.log('matched ' + name);
        break;  
      default:
        // console.log('no match found');
        break;
    }

    // if (name === 'maahi') {
    //   console.log('matched ' + name);
    // } else if (name === 'mishti') {
    //   console.log('matched ' + name);
    // } else {
    //   console.log('no match found');
    // }


    // if (name === 'maahi') {
    //   console.log('matched ' + name);
    // }
    // if (name === 'mishti') {
    //   console.log('matched ' + name);
    // } else {
    //   console.log('no match found');
    // }
    
    
    // Ternary operator example:
    // condition ? true value : false value

    let messageIf = '';
    if (this.age < 20) {
      messageIf = 'below';
    } else {
      messageIf = 'equal or above';
    }
    // OR
    const message = this.age < 20
                      ? 'below'
                      : 'equal or above';


    let msgIf = '';
    if (this.age < 13) {
      msgIf = 'kid';
    } else if (this.age === 13) {
      msgIf = 'new teen';
    } else if (this.age > 13 && this.age <= 17) {
      msgIf = 'teen';
    } else {
      msgIf = 'adult';
    }

    const msg = this.age < 13
                  ? 'kid'
                  : this.age === 13
                  ? 'new teen'
                  : this.age > 13 && this.age <= 17
                  ? 'teen'
                  : 'adult';

  }



}
