import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatFormComponent } from './components/mat-form/mat-form.component';
import { CdrComponent } from './components/cdr/cdr.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertdialogboxComponent } from './components/alertdialogbox/alertdialogbox.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, HomeComponent, FormComponent, SignUpComponent, MatFormComponent, CdrComponent, FooterComponent, AlertdialogboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
