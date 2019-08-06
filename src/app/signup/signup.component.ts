import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formSignup = this.formBuilder.group({
      email: ['', [
        Validators.email,
        Validators.required,
        isGmail
      ]],
      fullname: ['', Validators.required],
      age: ['', [
        Validators.pattern('[0-9]+'),
        Validators.max(80),
        Validators.min(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirm_password: ['', [
          Validators.required,
          Validators.minLength(6)
      ]]
    });
   }

  ngOnInit() {
  }

  onSignup() {
    const { email, fullname, age, password, confirm_password } = this.formSignup.value;
    console.log(email, fullname, age, password, confirm_password);
  }

  isValidInput(controlName: string): boolean {
    const input = this.formSignup.get(controlName);
    if (input.valid && input.touched){
      return false;
    }
    return true;
  }
  passwordMustMatch(): boolean{
    const password = this.formSignup.get('password');
    const repassword = this.formSignup.get('confirm_password');
    if (password.valid && repassword.touched && password.value !== repassword.value) {
      return false;
    }
    return true;
  }
}
/**
 * Customize new Validators
 * @param controlName: AbstractControl
 */
function isGmail (controlName: AbstractControl) : ValidationErrors | null {
  return (controlName.value as String).endsWith('@gmail.com') ? null : {error : 'ERROR! '}
}