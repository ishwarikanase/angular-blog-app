import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  postCommentForm: FormGroup;
  blog: [];
  success: boolean;
  comment: boolean;
  likes: number;
  dislikes: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.postCommentForm = this.fb.group({
      comment: ['']
    });
    this.allBlogs();

  }

  allBlogs() {
    this.httpService.getServiceCall('showAllBlogs', true).subscribe(res => {
      this.blog = res['blog'];
      console.log('this.blog', this.blog);
      console.log("all blogs");
    });
  }

  newPost() {
    this.router.navigate(['../newPost'], { relativeTo: this.route });
  }

  reload() {
    this.allBlogs();
  }

  newComment(id) {
    console.log('id', id)
    this.comment = !this.comment;
  }

  profile(id) {
    this.router.navigate(['../profile'], { relativeTo: this.route });
    this.httpService.getServiceCall('othersProfile/' + id, true).subscribe(res => {
      console.log("hello");
    });
  }

  show(id) {
    console.log('id', id)
    this.success = !this.success;
    this.allBlogs();
  }

  submit(id) {
    this.httpService.postServiceCall('addComments/' + id, this.postCommentForm.value, true).subscribe(res => {
      this.comment = !this.comment;
    });
  }

  cancel() {

  }

  like(id) {
    this.httpService.getServiceCall('like/' + id, true).subscribe(res => {
      console.log(res['user'].likes.length);
      this.likes = res['user'].likes.length;
      this.allBlogs();
    });
  }

  disLike(id) {
    this.httpService.getServiceCall('disLike/' + id, true).subscribe(res => {
      this.dislikes = res['user'].dislikes.length;
      console.log(res['user'].dislikes.length);
      this.allBlogs();
    });
  }
}
