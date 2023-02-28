import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string') {
      const stringArr = Array.from(value);
      return stringArr.reverse().join("");
    }

    if (Array.isArray(value) && value instanceof Array) {
      return (value).reverse()
    }
  }
}
