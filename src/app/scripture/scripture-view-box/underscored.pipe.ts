import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscored'
})
export class UnderscoredPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[a-z]/gi, '_');
  }

}
