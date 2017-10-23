import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit() {
    console.log('menu')
  }

  public logout () {
    this.service.logout()
  }

}
