import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FirebaseserviceProvider } from "../../providers/firebaseservice/firebaseservice";
// import { FirebaseListObservable } from "angularfire";
//import { AngularFireDatabase } from "angularfire2/database";
// import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

interface Post {
  title: string;
  content: string;
}
interface PostId extends Post {
  id: string;
}
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  postscol: AngularFirestoreCollection<Post>;
  // posts: Observable<Post[]>;
  posts: any;
  title: string;
  description: string;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  constructor(
    public navCtrl: NavController,
    public firestore: AngularFirestore,
    public firebaseprovider: FirebaseserviceProvider
  ) {}
  ionViewDidLoad() {
    this.postscol = this.firestore.collection("post");
    // this.posts = this.postscol.valueChanges();
    this.posts = this.postscol.snapshotChanges().map(action => {
      console.log("action " + typeof action);
      return action.map(a => {
        console.log("a-->" + typeof a);
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
    console.log("observable post " + this.posts);
    console.log(this.posts.data);

    var temp = this.posts.subscribe(val => {
      console.log(val);
      console.log(this.posts);
    });
  }
  addDocument() {
    console.log("adddd clicked");
    this.firestore
      .collection("post")
      .add({ title: this.title, content: this.description });
    // this.firestore
    //   .collection("post")
    //   .doc("customid")
    //   .set({ title: this.title, content: this.description });
  }

  getpost(postid) {
    this.postDoc = this.firestore.doc("post/" + postid);
    this.post = this.postDoc.valueChanges();
  }
  deletePost(postid) {
    //console.log(postid);
    this.firestore.doc("post/" + postid).delete();
  }
}
