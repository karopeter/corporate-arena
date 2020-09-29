import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = {
    email: '',
    username: '',
    message: ''
  };
  submitted = false;

  constructor(private contactService: ContactService) { }
  contacts: any;

  ngOnInit(): void {
    this.retrieveContact();
  }

  saveContact(): void {
    const data = {
      email: this.contact.email,
      username: this.contact.username,
      message: this.contact.message
    };
    this.contactService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    }, error => {
      console.log(error);
    });
  }

  retrieveContact(): void {
     this.contactService.getAll().subscribe(data => {
       this.contacts = data;
       console.log(data);
     }, error => {
       console.log(error);
     });
  }

}
