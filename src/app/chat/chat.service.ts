import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ChatService{

    constructor(private socket:Socket){}

    sendMessage(message:any){
        console.log(message)
        this.socket.emit('mensagem',message);

    }
   public getMessage=()=>{
       return new Observable((observer)=>{
           
           this.socket.on('conteudo',(message:any)=>{
               console.log(message)
               observer.next(message);
           })
       })
   }
}