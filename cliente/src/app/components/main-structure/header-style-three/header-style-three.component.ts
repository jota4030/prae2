import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-style-three',
  templateUrl: './header-style-three.component.html',
  styleUrls: ['./header-style-three.component.scss']
})
export class HeaderStyleThreeComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
