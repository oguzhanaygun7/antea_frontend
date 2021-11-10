import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-sapphire-fue',
  templateUrl: './services-sapphire-fue.component.html',
  styleUrls: ['./services-sapphire-fue.component.scss']
})
export class ServicesSapphireFueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
