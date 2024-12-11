import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MessageDetailsComponent} from '../message-details/message-details.component';
import {MyFirstService} from '../services/my-first.service';

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
  // property injection can be used over construct injection (construct injection is recommended)
  // private service: MyFirstService = inject(MyFirstService);

  // we can use property injection instead of construct injection
  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmited = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmited = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    this.name = '';
    this.email = '';
    this.message = '';
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
