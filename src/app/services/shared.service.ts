import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  getLocalStorage(){
    return JSON.parse(localStorage.getItem('token'));
  }
  setLocalStorage(){
    localStorage.setItem("token","123");
  }
}
