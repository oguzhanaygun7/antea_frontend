import { Component ,Input} from '@angular/core';
import { TranslatePipe } from './pipes/translate/translate.pipe';
import { AuthService } from './services/auth/auth.service';

import {FormModel} from './form.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antea';
  lang: string;
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
  }


 formModel:FormModel;


  constructor(public authService: AuthService) {
this.formModel=new FormModel();
  }
  sendMail() {
   let ad=this.formModel.name;
   let mail=this.formModel.mail;
   let telefon=this.formModel.phone;

    this.authService.sendMail(ad, mail, 'Ad: ' + ad + '\nE-Mail: ' + mail + '\nTelefon: ' + telefon).subscribe(res => {
    }, err => {
    }, () => {
    });
  }
}


