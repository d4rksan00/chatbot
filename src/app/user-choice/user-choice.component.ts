import { Component } from '@angular/core';
import { UserModel } from './userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrl: './user-choice.component.css'
})
export class UserChoiceComponent {

  constructor(private router: Router){

  }

  users: UserModel[] = [
    new UserModel(1, "Bob"),
    new UserModel(2, "Alice"),
    new UserModel(3, "Tarzan")
  ]

  chooseCharacter(name: String){
    //todo: how to navigate to a new Page?
    this.router.navigate([("/chat")])
  }


}
