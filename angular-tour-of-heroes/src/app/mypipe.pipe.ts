import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  /*transform(myString : string): string {

    var returnString: string ="";
    myString = myString.toLowerCase();
    var temporary: string;
    for (let i = 0; i < myString.split(" ").length; i++) {
      temporary = myString.split(" ")[i];
      for (let j = 0; j < temporary.length; j+2) {
        temporary[j].toUpperCase();
      }
      returnString.concat(temporary, " ");
    }
    return returnString;
  }*/

  transform(value:string): string {
    return value.toUpperCase();
  }
}
