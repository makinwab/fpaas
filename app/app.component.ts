import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  message = "Hello World!";
  users: User[] = [
    { id: 25, name: "Makinwa Bukola", username: "makinwab" },
    { id: 26, name: "Chris", username: "sevilayha"},
    { id: 27, name: "Nick", username: "whatnicktweets"},
    { id: 28, name: "Holly", username: "hollylawly"}
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user
    console.log(user);
  }
}
