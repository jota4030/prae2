import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../app/components/main-structure/login-page/login-page.component'
import { HomePageComponent } from '../app/components/home-page/home-page.component'
import { ListaPaginasComponent } from '../app/components/administracion/paginas/lista-paginas/lista-paginas.component'
import { ListaMultimediasComponent } from '../app/components/administracion/multimedias/lista-multimedias/lista-multimedias.component'
import { InstructorsPageOneComponent } from '../app/components/paginas/instructors-page-one/instructors-page-one.component'

import { LoginRouteGuard } from './router/guard/auth-guard';
import { NotLoginRouteGuard } from './router/guard/notAuth-guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotLoginRouteGuard]
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'paginas',
    component: ListaPaginasComponent,
    canActivate: [LoginRouteGuard]
  },
  {
    path: 'multimedias',
    component: ListaMultimediasComponent,
    canActivate: [LoginRouteGuard]
  },
  {
    path: 'instructor',
    component: InstructorsPageOneComponent,
  },
  {
    path: '**',
    component: LoginPageComponent,
    canActivate: [NotLoginRouteGuard]
  },
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [NotLoginRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
