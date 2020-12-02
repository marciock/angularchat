import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
private _sendAudioSource=new Subject<any>();
sendAudio$=this._sendAudioSource.asObservable();

  constructor() { }

  sendMessage(message:any){
    this._sendAudioSource.next(message);
  }
}
