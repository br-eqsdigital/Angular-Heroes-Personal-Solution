import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MypipePipe implements PipeTransform {
  transform(myString: string): string {
    return myString
      .split('')
      .map((word, index) => {
        if (index % 2 === 0) {
          return word.toLowerCase();
        } else {
          return word.toUpperCase();
        }
      })
      .join('');
  }
}
