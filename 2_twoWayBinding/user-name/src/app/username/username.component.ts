import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  userCreationStatus = "No User was created!";
  userName = '';

  ngOnInit(): void {
  }

  onCreateServer() {
    this.userCreationStatus = 'User was created and name is ' + this.userName;
  }


}
