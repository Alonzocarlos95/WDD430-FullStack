import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document!: Document | undefined;

  nativeWindow: any;  

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router,
              private windRefService: WindRefService) { }

  ngOnInit(): void {

    this.nativeWindow = this.windRefService.getNativeWindow();

    this.route.params.subscribe(
      (params: Params) => {
        const documentId = params['id'];
        // this.document = this.documentService.getDocument(documentId);
        console.log(documentId)
        console.log(this.documentService.getDocument(documentId))
        console.log(this.document?.name)
        this.document = this.documentService.getDocument(documentId);
      }
    )
  }

  onView() {
    this.document?.url ? this.nativeWindow.open(this.document?.url) : null;
  }

  onDelete() {
    this.documentService.deleteDocument(this.document!);
    this.router.navigate(['/documents']);
  }
}
