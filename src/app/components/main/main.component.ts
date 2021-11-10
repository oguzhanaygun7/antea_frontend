import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../form.model'
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  formModel: FormModel;
  constructor(public authService: AuthService) {
    this.formModel = new FormModel();
  }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //@ts-ignore
    $(".header-bottom-2__banner").owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      dots: true,
      items: 1,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 10000,
      mouseDrag: false,
      responsiveClass: true,
      responsive: {
        0: {
          nav: false,
          dots: false,
        },
        1200: {
          nav: true,
          dots: true,
        },
      }
    });

    //@ts-ignore
    $(".our-clients__carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 1,
      margin: 50,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 10000,
      mouseDrag: true,
      responsiveClass: true,
      responsive: {
        0: {
          dots: true,
          nav: false,
          items: 1,
        },

        1200: {
          items: 1,
          dots: true,
          nav: true,
        },
      }
    });
    //@ts-ignore
    $(".specialists-2__carousel").owlCarousel({
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
    })


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
  sendMail1() {
    let ad=this.formModel.name;
    let mail=this.formModel.mail;
    let telefon=this.formModel.phone;
    let mesaj=this.formModel.mesaj;
     this.authService.sendMail(ad, mail, 'Ad: ' + ad + '\nE-Mail: ' + mail + '\nTelefon: ' + telefon+'\nMesaj: '+mesaj).subscribe(res => {
     }, err => {
     }, () => {
     });
   }

}
