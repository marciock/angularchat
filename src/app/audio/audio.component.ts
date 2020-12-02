import { Component, OnInit } from '@angular/core';
import{AudioService} from '../audio.service';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  chunks:any[]=[];
  sound:boolean=false;
  private mr:any;

  
  constructor(private _audioService:AudioService) { }

  ngOnInit(): void {
  }
  public newSound(value:boolean){
    this.sound=value;

    navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{
        this.mr=new MediaRecorder(stream);
        if(this.sound===true){
          this.chunks=[];

          this.mr.ondataavailable=data=>{
            this.chunks.push(data.data);
          }
          this.mr.start();

          
        }
    })
  }
  public stopSound(){
    this.sound=false;
    this.mr.stop();
    this.mr.onstop=()=>{
      const blob=new Blob(this.chunks,{type:'audio/ogg;code=opus'});

      this.chunks=[];
      const reader=new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend=()=>{
        console.log('audio')
      // let trr=reader.result;
      this._audioService.sendMessage(reader.result)
        
      }
    }
    
  }


}
