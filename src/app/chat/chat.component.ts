import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import {ChatService} from './chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatForm:FormGroup;
  contents:any[]=[];
  constructor( private fb:FormBuilder,private chatService:ChatService) { }

  ngOnInit(): void {
    this.initialized();

    
    this.chatService.getMessage().subscribe((message:any)=>{
        console.log(message)
      this.contents.push(message);
    })

    
  }
  initialized():void{
    this.chatForm=this.fb.group({
      nome:sessionStorage.getItem('nome'),
      mensagem:''
     
      
    })
  }
  
  envia(){
    let message={nome:this.chatForm.controls.nome.value ,mensagem:this.chatForm.controls.mensagem.value};
    console.log(message)
    this.chatService.sendMessage(message);
  }
}
