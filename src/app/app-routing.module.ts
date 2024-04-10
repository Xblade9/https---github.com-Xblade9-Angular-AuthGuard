import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { authguardGuard } from 'src/auth/authguard.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatFormComponent } from './components/mat-form/mat-form.component';
import { CdrComponent } from './components/cdr/cdr.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent, canActivate: [authguardGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'matform', component: MatFormComponent },
  { path: 'cdr', component: CdrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
