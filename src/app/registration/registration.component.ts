import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  msgs = []
  registrationForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.email],
      password: ['',Validators.required]
    });
  }

  submit() {
    if (this.registrationForm.valid) {
      this.httpService.postServiceCall('register', this.registrationForm.value, false).subscribe(res => {
        console.log("hii");
        this.msgs.push({ severity: 'success', summary: 'Success!' });
        this.router.navigate(['../login'], { relativeTo: this.route });
      });
    } else {
      alert("form is invalid");
    }

  }

}

