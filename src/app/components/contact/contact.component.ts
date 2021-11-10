import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../form.model'
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formModel: FormModel;
  constructor(public authService: AuthService) {
    this.formModel = new FormModel();
  }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //@ts-ignore
    $('.specialists-2__carousel').owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots: true,
      items: 1,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 10000,
      mouseDrag: true,
      responsiveClass: true,
      responsive: {
          0: {
              dots: true,
              items: 1,
          },

          767: {
              dots: true,
              items: 2,
          },

          1200: {
              items: 1,
              dots: true,
          },
      }
  });
  }
  sendMail() {
    let ad=this.formModel.name;
    let mail=this.formModel.mail;
    let mesaj=this.formModel.mesaj;
     this.authService.sendMail(ad, mail, 'Ad: ' + ad + '\nE-Mail: ' + mail + '\nMesaj: ' + mesaj).subscribe(res => {
     }, err => {
     }, () => {
     });
   }
}
