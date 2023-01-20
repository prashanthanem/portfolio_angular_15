import { Component, ViewChild } from '@angular/core';
import { Contact } from './contact';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('contactForm') form : any;

  contactModel = new Contact('', '', '');
  submitted = false;
  loading = false;

  onClickSubmit(){
    this.loading=true
    console.log('contactForm', this.contactModel);
    this.sendEmail();
  }

  public sendEmail() {
    const template_params = {
      'from_name': this.contactModel.name,
      'from_email': this.contactModel.email,
      'message': this.contactModel.message
  };
    emailjs.send('service_w6c0nmt', 'template_qjdc26i', template_params, 'yffB3k72wE-CDiycd')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.submitted = true;
        this.form.reset();
        this.loading= false;
      }, (error) => {
        console.log(error.text);
      });
  }
}
