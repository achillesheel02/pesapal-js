import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Payload {
  email: string;
  phoneNumber: number;
  ref: string;
  amount: number;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class PesapalService {
  firstName = '';
  lastName = '';
  email = '';
  phoneNo = 0;
  amount = 0;


  constructor(private http: HttpClient) { }

  getUserInfo(firstName, lastName, email, phoneNo, amount) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNo = phoneNo;
    this.amount = amount;
  }

  reDirectoPesapal() {
    const payload: Payload = {
      email: this.email,
      phoneNumber: this.phoneNo,
      ref: 'ref',
      amount: this.amount,
      type: 'MERCHANT'
    };
    console.log(payload);
    return this.http.post<{url: string}>('http://localhost:3000/pesapalredirect', payload);
  }
}
