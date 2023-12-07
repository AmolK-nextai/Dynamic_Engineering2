import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutComponent } from 'src/components/about/about.component';
import { GalleryComponent } from 'src/components/gallery/gallery.component';
import { OurcompanyComponent } from 'src/components/ourcompany/ourcompany.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { LoginComponent } from 'src/components/login/login.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'ourcompany',component:OurcompanyComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'navbar',component:NavbarComponent},
 {path:'admin',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule), canActivate: [authGuard]}
,
 {path:'login',component:LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
