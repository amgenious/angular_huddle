import { Component } from '@angular/core';

interface Card {
  title: string
  body: string
  image: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'huddle';

  cards : Card[] = [
    {
      title: 'Grow Together',
      body: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
      image: '/assets/images/illustration-grow-together.svg',
    },
    {
      title: 'Flowing Conversations',
      body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      image: '/assets/images/illustration-flowing-conversation.svg',
    },
    {
      title: 'Your Users',
      body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      image: '/assets/images/illustration-your-users.svg',
    },
  ] 
  // signupUsers: any[] =[];
  // signupObj:any ={
  //   userName:'',
  //   email:'',
  //   password:'',
  // };
  // loginObj:any={
  //   userName:'',
  //   password:'',
  // }
  
     

     ngOnInit(): void{
      // const localData = localStorage.getItem('signUpUsers');
      // if(localData != null){
      //     this.signupObj = JSON.parse(localData);
      // }
     }   
    //  onSignUp(){
    //     this.signupUsers.push(this.signupObj);
    //     localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    //     this.signupObj = {
    //       userName:'',
    //       email:'',
    //       password:'',
    //     }
    //  }
    //  onLogin(){
    //     const isUserExit = this.signupUsers.find(m => m.userName === this.loginObj.userName && m.password === this.loginObj.password)
    //     if(isUserExit == undefined){
    //       alert("Login Successfully")
    //     }else{
    //       alert("Wrong Credentials");
    //     }
    //  }

    // signupForm = new FormGroup({
    //   username: new FormControl([Validators.required,Validators.minLength(10)]),
    //   email: new FormControl([Validators.required]),
    //   password: new FormControl([Validators.required]),
    // })

    // get username(){
    //   return this.signupForm.get('username');
    // }
    // get email(){
    //   return this.signupForm.get('email');
    // }
    // get password(){
    //   return this.signupForm.get('password');
    // }

    

    
}
