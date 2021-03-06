import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path:'register', component : RegisterComponent},
  { path:'quiz', component : QuizComponent, canActivate: [AuthGuard]},
  { path:'result', component : ResultComponent, canActivate: [AuthGuard]},
  { path:'', redirectTo:'/register', pathMatch:'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
