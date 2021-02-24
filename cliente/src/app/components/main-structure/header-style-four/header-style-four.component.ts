import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-style-four',
  templateUrl: './header-style-four.component.html',
  styleUrls: ['./header-style-four.component.scss']
})
export class HeaderStyleFourComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
