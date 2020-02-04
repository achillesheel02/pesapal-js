import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PesapalService} from '../services/pesapal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private pesapalService: PesapalService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (typeof f.value.email === 'undefined') {
      f.value.email = null;
    }
    if (typeof f.value.phoneNumber === 'undefined') {
      f.value.phoneNo = null;
    }
    this.pesapalService.getUserInfo(f.value.firstName, f.value.lastName, f.value.email, f.value.phoneNumber, f.value.donationAmount);
    this.router.navigate(['pesapal']);

  }
}
