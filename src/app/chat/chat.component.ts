import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import {ChatService} from './chat.service';
import {AudioService} from '../audio.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatForm:FormGroup;
  contents:any[]=[];
  
  //newAduio:any;
  constructor( private fb:FormBuilder,
    private chatService:ChatService,
    private _audioService:AudioService,
     private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.initialized();

    
    this.chatService.getMessage().subscribe((message:any)=>{
        console.log(message)
      this.contents.push(message);
       this._audioService.sendAudio$.subscribe(mess=>{
        
        console.log(this.getSanitize(mess))
        
         let audio=this.getSanitize(`<audio [src]="${mess}" controls="true" class=" w-50 p-3 align-middle"></audio>`);
       // console.log(audio);
       let message={nome:this.chatForm.controls.nome.value ,mensagem:audio};
        this.chatService.sendMessage(message);
        
      })
     
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
  public getSanitize(src:string){
   
    return this.sanitizer.bypassSecurityTrustUrl(src)
  }
   
  
}