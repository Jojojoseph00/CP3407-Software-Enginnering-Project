import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import * as firebase from "firebase";
import { RouterTestingModule } from "@angular/router/testing";

@Component({
  selector: "app-newfeed",
  templateUrl: "./newfeed.page.html",
  styleUrls: ["./newfeed.page.scss"]
})
export class NewfeedPage implements OnInit {
  uid: string;
  constructor(public activeRoute: ActivatedRoute, public router: Router) {
    this.uid = this.activeRoute.snapshot.paramMap.get("uid");
  }

  ngOnInit() {}

  chatUser() {
    this.router.navigate(["chats", firebase.auth().currentUser.uid]);
  }
  userProfile() {
    this.router.navigate(["profile", firebase.auth().currentUser.uid]);
  }
}
