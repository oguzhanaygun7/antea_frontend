import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  changeLang() {

    if (localStorage.getItem('lang') == 'tr') {
      this.authService.setLanguage('en');
    }else
    if (localStorage.getItem('lang') == 'en') {
      this.authService.setLanguage('tr');
    }

  }

}
