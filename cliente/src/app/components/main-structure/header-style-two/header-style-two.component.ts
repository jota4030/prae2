import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-style-two',
  templateUrl: './header-style-two.component.html',
  styleUrls: ['./header-style-two.component.scss']
})
export class HeaderStyleTwoComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
