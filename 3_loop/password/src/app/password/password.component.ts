import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  displayText:string;
  toggleText:string;
  log = [];
  

  constructor() {

  }

  onButtonClick(){
    this.displayText = 'Test text'
    this.log.push(this.log.length + 1)
    return this.displayText;

  }
  onChange(e){
    if(e.checked)
      this.toggleText = 'Secret Password = Tuna'
    else
      this.toggleText = ''
  }



}
