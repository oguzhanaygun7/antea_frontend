import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../../services/translate/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) {
    }

    transform(value: any, args?: any): any {
      if (localStorage.getItem('lang')==null) {
        localStorage.setItem('lang', 'tr');
        window.location.reload();
    }
        if (!value) {
            return;
        }
        return this._translate.instant(value);
    }

}
