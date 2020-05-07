import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/registration'], { relativeTo: this.route });
  }
  login() {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
}
