import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AddUser} from '../../modules/add-user.module';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;

  constructor(private fb:FormBuilder ,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.initializedForm();
  }
  initializedForm():void{
    this.userForm=this.fb.group({
      nome:'',
      sobrenome:'',
      email:'',
      senha:'',
      resenha:''
    })
  }
  cancelar(){
    this.router.navigate(['/']);
  }
  salvar(){
    const data=new AddUser(this.userForm)
    //localStorage.setItem('users',data);
   // localStorage.clear();

    console.log(data)
    
    
  }

}
