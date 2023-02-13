import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      '1',
      'records_2022_01',
      'Academic Records January 2022',
      'https://byui.instructure.com/courses/219644/pages/w04-assignment-instructions',
      null
    ),
    new Document(
      '2',
      'records_2022_02',
      'Academic Records February 2022',
      'https://byui.instructure.com/courses/219644/pages/w04-assignment-instructions',
      null
    ),
    new Document(
      '3',
      'records_2022_03',
      'Academic Records March 2022',
      'https://byui.instructure.com/courses/219644/pages/w04-assignment-instructions',
      null
    ),
    new Document(
      '4',
      'records_2022_04',
      'Academic Records April 2022',
      'https://byui.instructure.com/courses/219644/pages/w04-assignment-instructions',
      null
    ),
    new Document(
      '5',
      'records_2022_05',
      'Academic Records May 2022',
      'https://byui.instructure.com/courses/219644/pages/w04-assignment-instructions',
      null
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectedDocument(documentObj: Document) {
    this.selectedDocumentEvent.emit(documentObj);
  }
}
