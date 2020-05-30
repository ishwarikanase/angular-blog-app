import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  getLocalStorage(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
  }
  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
