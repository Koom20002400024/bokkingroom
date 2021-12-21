import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireMessagingModule } from "@angular/fire/messaging";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

// import { environment } from "./environment";
// import { AngularFirestoreModule } from "@angular/fire/firestore";

import { FirebaseService } from "./firebase.service";
import { AngularFirestore } from "@angular/fire/firestore";

import { HomeComponent } from "./home/home.component";
import { DisplayRoomComponent } from "./display-room/display-room.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-db.service";
import { UserService } from "./user.service";
import { UserdbService } from "./userdb.service";

const config = {
  apiKey: "AIzaSyAkehytNrQnEdT0fr4SW_iRQ7v78HcTKn0",
  authDomain: "environmentmenager.firebaseapp.com",
  databaseURL: "https://environmentmenager.firebaseio.com/",
  projectId: "environmentmenager",
  storageBucket: "environmentmenager.appspot.com",
  messagingSenderId: "1079166000567",
  appId: "1:1079166000567:web:9c16473234f3f1b6cd9c32",
  measurementId: "G-096R1SBD2T"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DisplayRoomComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "home", component: HomeComponent }
    ])
  ],
  providers: [
    FirebaseService,
    AngularFirestore,
    InMemoryDataService,
    UserService,
    UserdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
