import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MessageDetailsComponent} from '../message-details/message-details.component';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    MessageDetailsComponent
  ],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmited: boolean = false;
  messages: Array<any> = [];

  onSubmit() {
    this.isSubmited = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    this.name = '';
    this.email = '';
    this.message = '';
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
