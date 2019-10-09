import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.css']
})
export class PageLoadingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.loading();
  }

  loading() {
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.router.navigate(["login"]);
    }, 3000);
  }


}
