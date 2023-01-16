import { Component, ViewChild } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('contactForm') form : any;

  contactModel = new Contact('', '', '');

  onClickSubmit(){
    console.log('contactForm', this.contactModel);
    this.form.reset();
    
    // this.contactModel.name = '';
    // this.contactModel.message = '';
    // this.contactModel.email = '';

  }
}
