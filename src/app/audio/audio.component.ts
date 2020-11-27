import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  chunks:any[]=[];
  sound:boolean=false;
  private mr;
  constructor() { }

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

          
        }
    })
  }


}
