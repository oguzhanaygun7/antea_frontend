import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '../../pipes/translate/translate.pipe';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class AuthService {

    lang = localStorage.getItem('lang');

    constructor(private translate: TranslatePipe,
                private router: Router,
                private http: HttpClient) {
    }

    setHeadersWithToken() {
      let headersWithToken: HttpHeaders;
      headersWithToken = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Cache-Control', ' no-cache')
          .set('Content-Type', 'application/json')
      return headersWithToken;
  }

    sendMail(title,subject,body){
      const headers = this.setHeadersWithToken();
      const options = {headers};
      const data ={
        "title":title,
        "subject":subject,
        "body":body
      };
      return this.http.post('http://anteaclinic.com/assets/mailler/mail_gonder.php', data,options)
          .pipe(
              map(res => res));
    }




    setLanguage(lang) {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'tr');
            window.location.reload();
        } else {
            if (lang.trim() !== '') {
                localStorage.setItem('lang', lang);
                window.location.reload();
            }
        }
    }



}
