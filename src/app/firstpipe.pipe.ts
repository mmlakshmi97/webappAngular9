import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstpipe'
})
export class FirstpipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
