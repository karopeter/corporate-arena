import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    contact: any = {};
    title = 'toaster-not';

  constructor(private contactService: ContactService, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.contact);
    this.contactService.postContact(this.contact).subscribe(next => {
      console.warn('Message Sent' + next);
      this.contact.userName = '';
      this.contact.email = '';
      this.contact.message = '';
    }, error => {
      console.warn('message failed to send');
    });
  }
  showToasterSuccess(): void {
    this.notifyService.showSuccess('Message submitted successfully!!', 'http://inspirecc-001-site1.dtempurl.com');
 }
}
