import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() childMessage: any;
  public disablePlay= false;
  public disablePause =  false;

  constructor() { }

  ngOnInit() {
  }
  playPause(){
    if(this.childMessage.nativeElement.paused == true){
      this.childMessage.nativeElement.play();
      this.disablePlay = true;
      this.disablePause = false;
    } else{
      this.disablePlay = false;
      this.disablePause = true;
    }
    
  }
  pauseVideo(){
    this.childMessage.nativeElement.pause();
    this.disablePlay = false;
    this.disablePause = true;
  }
  volumeIncrease(){
    this.childMessage.nativeElement.volume =1;
  }
  volumeDecrease(){
    this.childMessage.nativeElement.volume =0;
  }
  reloadVideo(){
    this.childMessage.nativeElement.load();
    this.childMessage.nativeElement.play();
    this.disablePlay = true;
    this.disablePause = false;
    this.childMessage.nativeElement.muted =  false;
  }
  mutedVideo(){
    if(this.childMessage.nativeElement.muted){
      this.childMessage.nativeElement.muted =  false;
    } else{
      this.childMessage.nativeElement.muted =  true;
    }
  }

}
