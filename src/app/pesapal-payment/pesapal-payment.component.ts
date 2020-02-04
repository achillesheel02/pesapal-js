import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PesapalService} from '../services/pesapal.service';
import {AdminService} from '../services/admin.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-pesapal-payment',
  templateUrl: './pesapal-payment.component.html',
  styleUrls: ['./pesapal-payment.component.css']
})
export class PesapalPaymentComponent implements OnInit {
  public token: string = null;

  private iframeLinkSafe: SafeResourceUrl;

  constructor(private http: HttpClient,
              private pesapalService: PesapalService,
              private adminService: AdminService,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.pesapalService.reDirectoPesapal()
      .subscribe((link)  => {
        this.iframeLinkSafe = this.sanitizer.bypassSecurityTrustResourceUrl(link.url);
      });
  }

}
