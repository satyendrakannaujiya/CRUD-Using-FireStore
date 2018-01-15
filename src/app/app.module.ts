import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { FirebaseserviceProvider } from "../providers/firebaseservice/firebaseservice";
import { Firebase } from "@ionic-native/firebase";
import * as firebase from "firebase";
const firebase_config = {
  apiKey: "AIzaSyCYZF7ELe5wT3qvlMbSGWniunMozM2xg4k",
  authDomain: "fir-81cff.firebaseapp.com",
  databaseURL: "https://fir-81cff.firebaseio.com",
  projectId: "fir-81cff",
  storageBucket: "fir-81cff.appspot.com",
  messagingSenderId: "638345905086"
};

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase_config),
    IonicModule.forRoot(MyApp),

    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseserviceProvider
  ]
})
export class AppModule {}
