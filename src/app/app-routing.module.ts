import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { NewPostComponent } from './new-post/new-post.component';


const routes: Routes = [
  { path: '' , component:HomePageComponent },
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'blog',component:BlogComponent},
  {path:'newPost',component:NewPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
