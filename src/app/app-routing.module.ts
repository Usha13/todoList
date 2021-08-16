import { AddtodoComponent } from './todos/addtodo/addtodo.component';
import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {'path' : '' , component : HomeComponent},
  {'path' : 'login' , component : SigninComponent},
  {'path' : 'register' , component : SignupComponent},
  {'path' : 'about' , component : AboutComponent},
  {'path' : 'todos' , component : TodosComponent, canActivate : [AuthGuard]},
  {'path' : 'addtodo' , component : AddtodoComponent, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[AuthGuard],
  exports: [RouterModule],

})
export class AppRoutingModule { }
