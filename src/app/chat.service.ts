import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  firebuddychats = firebase.database().ref('/buddychats');
  buddy: any;
  buddymessages = [];
  constructor() { }

  initializebuddy(buddy) {
    this.buddy = buddy;
  }
}
