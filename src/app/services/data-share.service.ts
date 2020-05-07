import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private headerSource = new BehaviorSubject(false);
  currentHeader = this.headerSource.asObservable();

  constructor() { }

  changeHeader(success: boolean) {
    this.headerSource.next(success);
  }

}
