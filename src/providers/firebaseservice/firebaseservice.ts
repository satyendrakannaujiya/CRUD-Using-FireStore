//import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabase } from "angularfire";
// import { Firebase } from "@ionic-native/firebase";

/*
  Generated class for the FirebaseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseserviceProvider {
  constructor(public http: Http) {
    console.log("Hello FirebaseserviceProvider Provider");
  }
  // getContactList() {
  //   return this.angularfiredb.list("/contactsList/");
  // }
  // addContact(name) {
  //   this.angularfiredb.list("/contactsList").push(name);
  // }
  // deleteContact(id) {
  //   this.angularfiredb.list("/contactsList").remove(id);
  // }
}
