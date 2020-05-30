import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../services/data-share.service';
import { SharedService } from '../services/shared.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  success: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataShare: DataShareService,
    private sharedService: SharedService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    if (this.sharedService.getLocalStorage('token')) {
      this.success = true;
    }

    this.dataShare.currentHeader.subscribe(success => {
      if (success) {
        this.success = success;
      }
    });
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
    this.router.navigate(['../profile'], { relativeTo: this.route });
  }
  blog() {
    this.router.navigate(['../blog'], { relativeTo: this.route });
  }
  logout() {
    localStorage.clear();
    this.success = false;
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
}