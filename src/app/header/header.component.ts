import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  success: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private dataShare: DataShareService) { }

  ngOnInit() {
    this.dataShare.currentHeader.subscribe(success => this.success = success);
  }
  register() {
    this.router.navigate(['/registration'], { relativeTo: this.route });
  }
  login() {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
  dashboard() {

  }
  profile() {

  }
  blog() {
    this.router.navigate(['../blog'], { relativeTo: this.route });
  }
  logout() {

  }
}