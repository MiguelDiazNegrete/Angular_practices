import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('formRef', { static: true }) form: NgForm;
  defaultQuestion = '';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.defaultQuestion = 'pet';
    }, 2000);

  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'sugested name',
    //   gender: 'male',
    // });
  }

  submit() {
    console.log('form: ', this.form);
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.gender = this.form.value.gender;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;

    this.form.reset();
    this.submitted = true;
  }

  // submit(form: NgForm) {
  //   console.log('form: ', form);
  // }
}
