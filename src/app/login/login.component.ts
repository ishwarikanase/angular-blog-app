import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../services/data-share.service';
import { SharedService } from '../services/shared.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  msgs = [];
  loginForm: FormGroup;

  constructor(
    private dataShare: DataShareService,
    private sharedService: SharedService,
    private fb: FormBuilder,
    private httpService: HttpService
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });

  }

  login() {
    this.httpService.postServiceCall('login', this.loginForm.value, false).subscribe(res => {
      console.log("helo");
      this.msgs.push({ severity: 'success', summary: 'Success!' });
      this.sharedService.setLocalStorage("token", res['token']);
      this.dataShare.changeHeader(true);
      this.ngOnInit();
    });
  }

}
