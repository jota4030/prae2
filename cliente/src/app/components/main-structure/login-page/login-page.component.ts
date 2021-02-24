import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LoginRouteGuard } from "../../../router/guard/auth-guard";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  previousUrl: any
  usuario: any = {}
  loginForm = new FormGroup({
    f_username: new FormControl('', [Validators.required]),
    f_password: new FormControl('', [Validators.required]),
  })

  constructor(private loginService: LoginService, private loginRouteGuard: LoginRouteGuard, private router: Router) { }

  ngOnInit(): void {
    if (this.loginRouteGuard.redireccionar) {
      this.previousUrl = this.loginRouteGuard.redireccionar;
      this.loginRouteGuard.redireccionar = undefined;
    }
  }

  limpiar() {
    this.loginForm.reset()
  }

  onFormSubmit(form: any) {
    let that = this;

    if (form.valid) {
      this.usuario.f_username = form.value["f_username"]
      this.usuario.f_password = form.value["f_password"]
      console.log("1")
      this.loginService.login(this.usuario).subscribe((data: any) => {
        console.log("2")
        if (data.success) {
          console.log("3")
          that.loginService.setLocalStorage(data.login);
          console.log(that.previousUrl)
          if (that.previousUrl) {
            that.router.navigate([that.previousUrl]);
          } else {
            that.router.navigate(["/home"]);
          }
        } else {
          console.log(data.mensaje)
        }
      });
    } else {
      console.log('Digite todos los campos')
    }
  }
}
