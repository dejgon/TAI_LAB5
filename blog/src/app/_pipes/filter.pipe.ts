import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }

    filterText = filterText.toLowerCase();
    return value.filter(val => {
      console.log('Val' + val.title);
      return val.title.toLowerCase().includes(filterText);
    });
  }
}
