import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = this.formBuilder.group({
    email:'',
    password: '',
  })

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  })
  onSubmit(): void {
    console.log(this.signupForm.value);
    createUserWithEmailAndPassword(
      this.auth, 
      this.signupForm.value.email || '', 
      this.signupForm.value.password || '',
      ).then( (res:any) => {
        console.log(res)
        alert('sigup successful');
      }).catch( (err) => {
        console.log(err);
        alert(err.message);
      } )

  }
  onLogin(): void {
    console.log(this.loginForm.value);
    signInWithEmailAndPassword(
      this.auth,
      this.loginForm.value.email || '',
      this.loginForm.value.password || '',
    ).then ((res:any) => {
      console.log(res);
      this.router.navigate(['/fileupload'])
      alert('login successful');
    }).catch ((err) => {
      console.log(err);
      alert(err.message);
    })
   

  }
  constructor(
    private formBuilder: FormBuilder, private auth: Auth, private router: Router,
   ){}
}
