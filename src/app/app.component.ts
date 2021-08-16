import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyBzCLzEGxOMKtq9coPa5-b5WTK5mWn7AjY",
      authDomain: "todo-bcc2c.firebaseapp.com",
      projectId: "todo-bcc2c",
      storageBucket: "todo-bcc2c.appspot.com",
      messagingSenderId: "866887595661",
      appId: "1:866887595661:web:f208d6045fca35f0e154c4"
    };
    // Initialize Firebase
    firebase.default.initializeApp(firebaseConfig);

  }
}
