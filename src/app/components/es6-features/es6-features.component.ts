import { Component, OnInit } from '@angular/core';

const pageSize = 50;
@Component({
  selector: 'app-es6-features',
  templateUrl: './es6-features.component.html',
  styleUrls: ['./es6-features.component.scss']
})
export class Es6FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const result1 = this.computeSum1(10, 20);
    console.log(result1);


    const result11 = this.computeSum1(10, 20, 30);
    console.log(result11);

    
    
    const result2 = this.computeSum2(100, 200);
    console.log(result2);
    

    this.destructuringExample();
    this.spreadOpetarorExample();
    this.arrayMapForEachExample();
  }

  computeSum1(a: number, b: number, c?: number): number {
    if (c) {
      return a + b + c;
    } else {
      return a + b;
    }
  }

  computeSum2 = (a: number, b: number) => a + b;

  destructuringExample() {
    const student = {
      name: 'maahi',
      age: 4,
      country: 'canada'
    }

    const { name, age, country } = student;

    // // Earlier it was like below:
    // const name = student.name;
    // const age = student.age;
    // const country = student.country;
    console.log(name, age, country);
  }

  spreadOpetarorExample() {
    const numbers1 = [1,2,3];
    const numbers2 = [...numbers1];  // 1,2,3  clone
    const numbers3 = [...numbers1, 4,5, 'aaa','bbb']; // 1,2,3,4,5
    console.log(numbers2);
    console.log(numbers3);

    // merge two arrays
    const newNumbers = [ ...numbers1, ...numbers2];
    console.log(newNumbers);
  

    const address1 = {
      city: 'Bowmanville',
      state: 'Ontario',
      country: 'Canada'
    };

    const address2 = { ...address1 }; // clone
    console.log(address2);
    
    // merge two objects
    const vegetables = {
      name: 'potato',
      price: 10
    }
    const newObject = { ...address1, ...vegetables  };
    console.log(newObject);
  }

  arrayMapForEachExample() {
    const ar1 = [10, 20, 30, 40];
    const ar2 = ar1.map((value) => {
      return value + 1;
    });
    console.log(ar2);

    const ar3 = ar1.forEach((value) => value + 2);
    console.log(ar3);
  }

}
