import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output,
} from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
})
export class MessageEditComponent implements OnInit {
  currentSender: string = '10';
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor(private messageService:MessageService) {}

  ngOnInit(): void {}

  onSendMessage() {
    const newMsg = new Message(
      '4',
      this.subject.nativeElement.value,
      this.msgText.nativeElement.value,
      this.currentSender
    );
    this.messageService.addMessage(newMsg);
    // this.addMessageEvent.emit(newMsg);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }
}
