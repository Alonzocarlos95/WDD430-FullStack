import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [new Message(
    '1'
    ,'Assignment submitted'
    ,'I just finished the Angular project!'
    ,'Carlos'
    ),
    new Message(
      '2'
      ,'Assignment graded'
      ,'Thanks Carlos for letting me know. God job!'
      ,'Brother Paul'
      ),
      new Message(
        '2'
        ,'Follow Up'
        ,'Thanks! I learned a lot of new concepts this week.'
        ,'Carlos'
        ),
  ];
  constructor() { }

  ngOnInit(): void {
  }


  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
