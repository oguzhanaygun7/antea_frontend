import {InjectionToken} from '@angular/core';
import {LANG_EN_NAME, LANG_EN_TRANS} from '../../shared/language/lang-en';
import {LANG_TR_NAME, LANG_TR_TRANS} from '../../shared/language/lang-tr';
import {LANG_DE_NAME, LANG_DE_TRANS} from '../../shared/language/lang-de';
import {LANG_ES_NAME, LANG_ES_TRANS} from '../../shared/language/lang-es';
import {LANG_AR_NAME, LANG_AR_TRANS} from '../../shared/language/lang-ar';
import {LANG_FR_NAME, LANG_FR_TRANS} from '../../shared/language/lang-fr';

export const TRANSLATIONS = new InjectionToken('translations');

export const dictionary = {
  [LANG_TR_NAME]: LANG_TR_TRANS,
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_DE_NAME]: LANG_DE_TRANS,
    [LANG_ES_NAME]: LANG_ES_TRANS,
    [LANG_AR_NAME]: LANG_AR_TRANS,
    [LANG_FR_NAME]: LANG_FR_TRANS,
};

export const TRANSLATION_PROVIDERS = [
    {provide: TRANSLATIONS, useValue: dictionary},
];
