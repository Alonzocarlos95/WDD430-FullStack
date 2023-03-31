import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.contactService.getContacts();
  }

  onSelected(contactObj: Contact) {
    this.contactService.contactSelectedEvent.emit(contactObj);
  }

}
