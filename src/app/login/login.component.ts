import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msgs=[];
  constructor(private dataShare:DataShareService,private sharedService:SharedService) { }

  ngOnInit() {
  }

  login() {
    this.msgs.push({severity:'success', summary:'Success!'});
    this.dataShare.changeHeader(true);
    this.sharedService.setLocalStorage();
    console.log(this.sharedService.getLocalStorage());
  }
}
