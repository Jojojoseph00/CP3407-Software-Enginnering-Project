import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router,) { }

  ngOnInit() {
  }

  backHome(){
    console.log(firebase.auth().currentUser.uid);
    this.router.navigate(["newfeed", firebase.auth().currentUser.uid])
  }

  addUser(){
    this.router.navigate(["searchusers",firebase.auth().currentUser.uid])
  }
}
