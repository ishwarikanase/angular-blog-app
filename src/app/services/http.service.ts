import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly baseURL:string = "http://localhost:3000/api/";
  headers: HttpHeaders;
  token: string;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  getServiceCall(url: string, sendToken: boolean) {

    this.token = this.sharedService.getLocalStorage('token');
    if (sendToken) {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": this.token
      });
    }
    else {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }
    return this.http.get(this.baseURL + url, {
      headers: this.headers
    });
  }


  postServiceCall(url: string, body, sendToken: boolean) {
    this.token = this.sharedService.getLocalStorage('token');
    if (sendToken) {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": this.token
      });
    }
    else {
      console.log(this.baseURL+url);
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }
    // return "hello";
    return this.http.post(this.baseURL + url, body, {
      headers: this.headers
    });
  }
}
