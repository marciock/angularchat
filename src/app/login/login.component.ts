import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Login} from '../../modules/login.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
 

  constructor(private fb:FormBuilder){}
  
 
  ngOnInit(): void {
    
     this.initializeForm();
     
   
  }
  initializeForm():void{
    this.loginForm=this.fb.group({
      email:'',
      senha:''

    })
  }
  abrir(){

    const lg=new Login();
   const login=this.loginForm.value;
   const email=login.email;

   // const data=JSON.parse(localStorage.getItem('users'));
    console.log(lg.email(email));
    
    
  }
  
}
