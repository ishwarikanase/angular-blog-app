import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username:string;
  name:string;
  email:string;
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getServiceCall('myProfile',true).subscribe(res=>{
      // console.log(res['user']);
      this.username=res['user'].username;
      this.name=res['user'].name;
      this.email=res['user'].email;
      // console.log('this.user', this.user)
    })
  }

}
