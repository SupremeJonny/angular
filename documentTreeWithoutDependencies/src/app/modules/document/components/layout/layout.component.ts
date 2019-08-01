import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private paramSubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //todo 
  }

  ngOnInit() {
  }


}
