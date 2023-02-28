import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortProperty: string) {

    if (typeof value[0][sortProperty] === 'string') {
      return value.sort((a, b) => b[sortProperty].localeCompare(a[sortProperty]));
    }


    return value.sort((a, b) => a[sortProperty] - b[sortProperty]);
  }
}
