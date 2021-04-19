import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  subject: FormControl = new FormControl("", [Validators.required]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage?: string;

  constructor(private appComponent: AppComponent, private formBuilder: FormBuilder, private httpClient: HttpClient) {
    appComponent.comp = false;
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable();
      var formData: any = new FormData();
      formData.append("name", this.form.get("name")?.value);
      formData.append("email", this.form.get("email")?.value);
      formData.append("subject", this.form.get("subject")?.value);
      formData.append("message", this.form.get("message")?.value);
      this.isLoading = true;
      this.submitted = false;
      this.httpClient.post("https://script.google.com/macros/s/AKfycby1LkdKUhRj27O9Ofgj08SI-_32qxUYOohq7VDYSg/exec", formData).subscribe(
        (response: any) => {
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
        }
      );
    }
  }

  ngAfterViewInit() {
    // $.getScript('../assets/js/validate.js');
    $('.fullname .email-input').on('input', function () {
      let validateName = (name: string) => /[A-Za-z]{3,}/.test(name),
        validateEmail = (email: string) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      let name = $('.fullname'),
        email = $('.email-input');

      name.text('');
      email.text('');

      !validateName(name.val()) ? name.css('color', 'rgb(238, 53, 53)') : name.css('color', 'rgb(51, 51, 51)');
      !validateEmail(email.val()) ? email.css('color', 'rgb(238, 53, 53)') : email.css('color', 'rgb(51, 51, 51)');
    });
  }

}
