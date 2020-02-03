import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PesapalPaymentComponent} from './pesapal-payment/pesapal-payment.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/sign-up',
    pathMatch: 'full'
  },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'pesapal', component: PesapalPaymentComponent},
  { path: 'admin', component: AdminComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
