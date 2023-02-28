import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus',
  pure: false
})
export class FilterStatusPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || !filterString) return value;

    const filterArray = [];
    for (const item of value) {
      if ((<string>item[propName]).indexOf(filterString) >= 0) {
        filterArray.push(item);
      }
    }
    return filterArray;
  }

}
