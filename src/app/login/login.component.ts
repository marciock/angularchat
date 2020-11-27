import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Login} from '../../modules/login.module';
import {Session} from '../../modules/session.module';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
   resultEmail:boolean=false;
   resultSenha:boolean=false;
 

  constructor(private fb:FormBuilder,private router:Router){}
  
 
  ngOnInit(): void {
    
     this.initializeForm();
     
   
  }
  initializeForm():void{
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      senha:['',Validators.required]

    })
  }
  abrir(){

    const lg=new Login();
   const login=this.loginForm.value;
   const email=lg.Email(login.email);
   const senha=lg.Senha(login.senha)

  // console.log(email)
    console.log(email)
    if(login===email){
      this.resultEmail=true;
      
      
    }
    
    if(senha===true){
      this.resultSenha=true;
      const ss=new Session(email);
      this.router.navigate(['/chat'])
    }

   
    
    
  }
  
}
