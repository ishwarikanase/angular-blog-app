import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  list:Array<Number>=[1,2,3,4];
  success:boolean;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  newPost(){
    this.router.navigate(['../newPost'],{relativeTo:this.route});
  }

  reload(){
    
  }

  show(){
    this.success=!this.success;
  }

}
