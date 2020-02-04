import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class KeyData {
  consumerKey: string;
  consumerSecret: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  updatePesapalMetadata(consumerKey, consumerSecret) {
    const keys: KeyData = {consumerKey, consumerSecret};
    this.http.post('http://localhost:3000/addkeys', keys)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getPesaPalMetadata() {
    return this.http.get<{ ck: string, cs: string}>('http://localhost:3000/getKeys');
  }

}
