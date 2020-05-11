import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly baseURL: "http://localhost:3000/api/";
  headers: HttpHeaders;
  token;

  constructor(private http: HttpClient, private sharedService: SharedService) { }
  getServiceCall(url: String, sendToken: boolean) {
    this.token = this.sharedService.getLocalStorage();
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
    return this.http.get(this.baseURL+url,{
      headers:this.headers
    });
  }


  postServiceCall(url:String,body,sendToken:boolean){
    this.token = this.sharedService.getLocalStorage();
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
    return this.http.post(this.baseURL+url,body,{
      headers:this.headers
    });
  }
}
