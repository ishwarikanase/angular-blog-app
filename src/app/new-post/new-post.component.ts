import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.newPostForm = this.fb.group({
      title: [''],
      body: ['']
    });
  }

  back() {
    this.location.back();
  }
  submit() {
    // return;
    this.httpService.postServiceCall('newBlog', this.newPostForm.value, true).subscribe(res => {
      console.log("hello");
      this.router.navigate(['../blog'], { relativeTo: this.route });
    })
  }
}
