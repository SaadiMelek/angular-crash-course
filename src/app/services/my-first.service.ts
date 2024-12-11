import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Melek',
      email: 'melek@mail.com',
      message: 'First msg'
    });

    this.insert({
      name: 'Saadi',
      email: 'saadi@mail.com',
      message: 'Second msg'
    });

    this.insert({
      name: 'MS',
      email: 'ms@mail.com',
      message: 'Third msg'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
