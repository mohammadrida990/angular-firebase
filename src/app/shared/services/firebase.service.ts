import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  private config = environment.firebaseConfig;
  private defaultProject = firebase.initializeApp(this.config);

constructor(private route: Router) { }

  
  

login(email: string , password: string) {
  
  this.defaultProject.auth().signInWithEmailAndPassword(email, password).then(res => {
    console.log(res);
    localStorage.setItem('user', email);
    this.route.navigate(['/register']);
    
  }

  );
}

}
