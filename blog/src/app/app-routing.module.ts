import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { QuizComponent } from './quiz/quiz.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import {LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AdminGuard } from './_services/admin-guard.service';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogHomeComponent, canActivate:[AdminGuard]},
  { path: 'quiz', component: QuizComponent},
  { path: 'blog/detail/:id', component: BlogItemDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'new-post', component: NewPostComponent},
  { path: 'add-post', component: AddPostComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
