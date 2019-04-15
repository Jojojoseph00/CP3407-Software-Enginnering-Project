import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.page.html',
  styleUrls: ['./newfeed.page.scss'],
})
export class NewfeedPage implements OnInit {

  uid:string;
  constructor(public activeRoute:ActivatedRoute) { 
    this.uid=this.activeRoute.snapshot.paramMap.get('uid');

  }

  ngOnInit() {
  }

}
