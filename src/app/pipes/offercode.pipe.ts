import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg>10000)
    return "CODE20(20% off)";
    else if (arg> 500)
    return "Code 14 (5% off)";
    else if (arg>20000)
    return "Code 8 (8% off)";
    else
    return "Code 2 (2% off)"
  }

}
