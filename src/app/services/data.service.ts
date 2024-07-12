import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://api-d414.vercel.app';
  // private apiUrl = 'https://api-d414.vercel.app/customers';
  // private apiUrlTransactions = 'https://api-d414.vercel.app/transactions';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers`);
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions`);
  }

  // getCustomers(): Observable<allCustomer> {
  //   return this.http.get<allCustomer>(this.apiUrl);
  // }

  // getTransactions(): Observable<allTransaction> {
  //   return this.http.get<allTransaction>(this.apiUrl);
  // }
}
