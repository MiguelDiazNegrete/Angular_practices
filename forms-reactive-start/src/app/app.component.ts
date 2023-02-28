import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbbidenUsernames = ['alexis', 'anna']

  get hobbiesControl() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({})
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl(null, [Validators.required]),
      'hobbies': new FormArray([])
      // 'hobbies' : new FormArray([new FormControl()])
    });

    // this.signupForm.valueChanges.subscribe({ next: value => console.log(value) });
    // this.signupForm.statusChanges.subscribe({ next: value => console.log(value) });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [key: string]: string } {
    // if (this.forbbidenUsernames.indexOf(control.value?.toLowerCase()) !== -1) return { 'nameIsForbbiden': true }
    if (this.forbbidenUsernames.indexOf(control.value?.toLowerCase()) !== -1) return { 'nameIsForbbiden': 'This name is forbbiden!!' }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          res({ 'emailIsForbbiden': 'Email is forbbiden!' });
        } else {
          res(null);
        }
      }, 1500);
    });
    return promise;
  }

  submit() {
    console.log('form: ', this.signupForm.value);
  }
}
