import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendLastname'
})
export class AppendLastnamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    // console.log(args);

    // if (args && args.length) {
    //   val = args[0] + ' ' + value + ' setiya';
    // } else {
    //   val = value + ' setiya';
    // }
    const val = value + ' setiya';
    return val;
  }

}
