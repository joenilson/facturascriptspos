import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the CurrencyFormatterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'currencyFormatter',
})
export class CurrencyFormatterPipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(moneyValue: string, ...args) {
        var n = moneyValue;
        return n.replace(/./g, function (c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });
    }
}
