import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FireBaseService } from 'src/app/shared/services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', [Validators.required , Validators.minLength(6)])
  });
  constructor( private firebaseService: FireBaseService) { }
  
  ngOnInit() {
  }

  onLogin(){
    this.firebaseService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
  }

  
}
