import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();

  documentChangedEvent = new EventEmitter<Document[]>();

  private document!: Document[];  

  constructor() { 
    this.document = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.document.slice();
  }

  // getDocument(id:string){
  //   const target = this.document.filter(doc => doc.id === id);
  //   return target;
  // }

  getDocument(id: string) {
    const docTarget = this.document.find(doc => doc.id === id);
    return docTarget;
  }

  // getDocument(id:number){
  //   return this.document[id];
  // }

  // getDocument(id:string) {
  //   for (const doc of this.document) {
  //     if (doc.id === id) {
  //       return doc;
  //     }
  //   }
  // }

  deleteDocument(document: Document) {
    if(!this.document) {
      return;
    }

    const pos = this.document.indexOf(document);
    if(pos < 0) {
      return;
    }
    
    this.document.splice(pos, 1);
    this.documentChangedEvent.emit(this.document.slice());
  }

}
