import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouteGuard } from './router/guard/auth-guard';
import { NotLoginRouteGuard } from './router/guard/notAuth-guard';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { LoginService } from './services/login.service';
import { PaginasService } from './services/paginas.service';
import { MultimediasService } from './services/multimedias.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderStyleOneComponent } from './components/main-structure/header-style-one/header-style-one.component';
import { FooterComponent } from './components/main-structure/footer/footer.component';
import { LoginPageComponent } from './components/main-structure/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeoneMainBannerComponent } from './components/main-structure/homeone-main-banner/homeone-main-banner.component';
import { CrearActualizarMultimediaComponent } from './components/administracion/multimedias/crear-actualizar-multimedia/crear-actualizar-multimedia.component';
import { ListaMultimediasComponent } from './components/administracion/multimedias/lista-multimedias/lista-multimedias.component';
import { CrearActualizarPaginasComponent } from './components/administracion/paginas/crear-actualizar-paginas/crear-actualizar-paginas.component';
import { ListaPaginasComponent } from './components/administracion/paginas/lista-paginas/lista-paginas.component';
import { HomeoneAboutComponent } from './components/main-structure/homeone-about/homeone-about.component';
import { FunfactsComponent } from './components/main-structure/funfacts/funfacts.component';


import { InstructorsPageOneComponent } from './components/paginas/instructors-page-one/instructors-page-one.component';
import { HeaderStyleTwoComponent } from './components/main-structure/header-style-two/header-style-two.component';
import { HeaderStyleThreeComponent } from './components/main-structure/header-style-three/header-style-three.component';
import { HeaderStyleFourComponent } from './components/main-structure/header-style-four/header-style-four.component';
import { BecomeInstructorPartnerComponent } from './components/main-structure/become-instructor-partner/become-instructor-partner.component';
import { ImagenesComponent } from './components/template-multimedias/imagenes/imagenes.component';
import { VideosMp4Component } from './components/template-multimedias/videos-mp4/videos-mp4.component';
import { VideosYoutubeComponent } from './components/template-multimedias/videos-youtube/videos-youtube.component';
import { PdfComponent } from './components/template-multimedias/pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderStyleOneComponent,
    FooterComponent,
    FunfactsComponent,
    LoginPageComponent,
    HomePageComponent,
    CrearActualizarMultimediaComponent,
    ListaMultimediasComponent,
    CrearActualizarPaginasComponent,
    ListaPaginasComponent,
    InstructorsPageOneComponent,
    HeaderStyleTwoComponent,
    HeaderStyleThreeComponent,
    HeaderStyleFourComponent,
    HomeoneMainBannerComponent,
    BecomeInstructorPartnerComponent,
    HomeoneAboutComponent,
    ImagenesComponent,
    VideosMp4Component,
    VideosYoutubeComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    PaginasService,
    MultimediasService,
    LoginRouteGuard,
    NotLoginRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
