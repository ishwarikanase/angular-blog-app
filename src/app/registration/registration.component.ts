import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  msgs = []
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  submit() {
    this.msgs.push({ severity: 'success', summary: 'Success!' });
    this.router.navigate(['../login'],{relativeTo:this.route})
  }
}
