import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>();
  private contacts: Contact[] = [];
  
  constructor() {
    this.contacts = MOCKCONTACTS;  
   }

   getContacts():Contact[] {
    return this.contacts.slice();
   }

   getContact(id:string) {
     const contactTarget = this.contacts.find(contact => contact.id === id);
     return contactTarget === undefined ? null : contactTarget;
   }
}