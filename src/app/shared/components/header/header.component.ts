import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  lang:string;
  ngOnInit(): void {
     this.lang= localStorage.getItem('lang');
  }

  changeLang(lang) {
      this.authService.setLanguage(lang);
      this.lang= localStorage.getItem('lang');
  }


}
