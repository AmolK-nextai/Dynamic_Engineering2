import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutComponent } from 'src/components/about/about.component';
import { GalleryComponent } from 'src/components/gallery/gallery.component';
import { OurcompanyComponent } from 'src/components/ourcompany/ourcompany.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/components/login/login.component';
import {ToastsComponent} from '../app/admin/toasts/toasts.component'
import { FormsModule }   from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    OurcompanyComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
