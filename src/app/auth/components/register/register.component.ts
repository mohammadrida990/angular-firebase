import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { analytics } from 'firebase';
import { FireBaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confpassword: new FormControl('', Validators.required)
  });

  firstPass: string;
  secondPass: string;
  errorPass: boolean;
  errorEmail: boolean ;
  constructor(private fbService: FireBaseService) { }

  ngOnInit() {
  }

  onRegister() {

    this.firstPass = this.registerForm.controls.password.value;
    this.secondPass = this.registerForm.controls.confpassword.value;
    if (this.firstPass === this.secondPass) {
      this.errorPass = false ;
      this.fbService.register(this.registerForm.controls.email.value, this.registerForm.controls.password.value);
    } else {
      this.errorPass = true ;
    }
  }

  comparePass() {
    this.firstPass = this.registerForm.controls.password.value;
    this.secondPass = this.registerForm.controls.confpassword.value;

    if (this.firstPass === this.secondPass) {
      this.errorPass = false;
    } else {
      this.errorPass = true;
    }
  }

  compareEmail(email: string) {

  this.fbService.checkEmail(email).catch((e) => {
    console.log(e.code);
    if (e.code === 'auth/wrong-password') {
      this.errorEmail = true;
    } else {
      this.errorEmail = false;
    }
  });
  }


}
