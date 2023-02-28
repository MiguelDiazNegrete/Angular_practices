import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static forbbidenNames = 'test';
  public static forbbidenProjectNames(control: FormControl): Promise<{ [key: string]: string }> | Observable<{ [key: string]: string }> {
    const promise = new Promise<{ [key: string]: string }>((res, rej) => {
      setTimeout(() => {
        if (control && control.value.toLowerCase() === this.forbbidenNames)
          res({ forbbidenName: 'The name \'test\' is forbbiden' })
        else
          res(null);
      }, 1000);
    });
    return promise;
  }
}
