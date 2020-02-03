import { Component, OnInit } from '@angular/core';
import {Donation} from './donation.model';
import {Sort} from '@angular/material';

function sum(key) {
    return this.reduce((a, b) => a + (b[key] || 0), 0);
  }

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private securityKey = 'random-key';
  key: string;
  pesapalConsumerKey: string;
  pesapalConsumerSecret: string;
  totalDonations: number;
  displayedColumns: string[] = ['name', 'email', 'phoneNo', 'amount'];
  sortedData: Donation [];
  donations: Donation[] = [
  {
    name: 'Barak Asidi',
    email: 'bachillah@gmail.com',
    amount: 17000
},
    {
      name: 'Sharon Mathu',
      email: 'shariemathu@gmail.com',
      phoneNo: 722938716,
      amount: 15000
    },
    {
      name: 'Philemon Gichoka',
      phoneNo: 72223416,
      amount: 14000
    },
    {
      name: 'Elvis Muendo',
      email: 'elvismuendo@gmail.com',
      amount: 37240
    },
    {
      name: 'Carol Radull',
      email: 'bachillah@gmail.com',
      amount: 2200
    },
    {
      name: 'Phestus Omondi',
      phoneNo: 72123416,
      amount: 7000
    }
  ];
  constructor() {
    this.sortedData = this.donations.slice();
  }

  ngOnInit() {
    this.totalDonations = this.donations.reduce((a, b) => +a + +b.amount, 0);
  }
  checkSecurityKey() {
    return this.key === this.securityKey;
  }
  sortData(sort: Sort) {
    const data = this.donations.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'phoneNo':
          return this.compare(a.phoneNo, b.phoneNo, isAsc);
        case 'amount':
          return this.compare(a.amount, b.amount, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  }
