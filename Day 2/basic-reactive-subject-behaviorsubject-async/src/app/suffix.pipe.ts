import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

    transform(value: any, char: string = '!', count = 1): any {
        return value + char.repeat(count);
    }

}
