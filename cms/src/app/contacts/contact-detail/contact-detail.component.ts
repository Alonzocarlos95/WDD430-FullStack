import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() conctatToDisplay?: Contact;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const contactId = params['id'];
        const test = this.contactService.getContact(contactId);
        console.log(test);
        this.conctatToDisplay = test;
      }
    )
  }

  onDelete() {
    this.contactService.deleteContact(this.conctatToDisplay!);
    this.router.navigateByUrl('/contacts');
  }

}
