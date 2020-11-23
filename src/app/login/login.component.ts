import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

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
  teste(){
    console.log(this.loginForm);
  }
  
}
