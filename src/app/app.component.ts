import { Component } from '@angular/core';
import { Message } from './models/message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Bem vindo ao atendimento Droga Raia.', 
      'assets/images/bot.png', new Date())
    ];
  }
}
