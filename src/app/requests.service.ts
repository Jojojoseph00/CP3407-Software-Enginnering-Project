import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from './user.service';
import { Events } from '@ionic/angular';
import { connreq } from './models/interfaces/request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  firereq = firebase.database().ref("/Requests");
  userdetails;
  firefriends = firebase.database().ref("/Contacts");
  mycontacts;
  constructor(public userservice: UserService, public events: Events) { }

  sendrequest(req: connreq){
    var promise=new promise((resolve,reject)=>{
      this.firereq
      .child(req.recipient)
      .push({
        sender: req.sender
      })
      .then(()=>{
        resolve({success:true});
      })
      .catch(error=>{
        resolve(error)
      });
    });
    return promise;
  }
}
