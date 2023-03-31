import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();

  private document!: Document[];  

  constructor() { 
    this.document = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.document.slice();
  }

  getDocument(id:string){
    return this.document.filter(doc => doc.id === id);
  }
}
