import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs";
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get projectStatus() {
    return ['Stable', 'Critical', 'Finished'];
  };
  formProject: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formProject = this.formBuilder.group({
      projectName: [null, [Validators.required], [CustomValidators.forbbidenProjectNames.bind(CustomValidators)]],
      mail: [null, [Validators.required, Validators.email]],
      projectStatus: [null, [Validators.required]]
    });

    // this.formProject = new FormGroup({
    //   projectName: new FormControl(null, [Validators.required], [this.forbbidenProjectNames]),
    //   mail: new FormControl(null, [Validators.required, Validators.email]),
    //   projectStatus: new FormControl(null, []),
    // });
  }



  submit() {
    console.log('form values: ', this.formProject.value);
  }

}
