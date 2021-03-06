import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesapalPaymentComponent } from './pesapal-payment/pesapal-payment.component';
import { AdminComponent } from './admin/admin.component';
import { PhoneNoPipe } from './admin/phone-no.pipe';
import {HttpClientModule} from '@angular/common/http';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    PesapalPaymentComponent,
    AdminComponent,
    PhoneNoPipe,
    SuccessComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
