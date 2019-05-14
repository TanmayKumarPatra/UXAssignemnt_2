import { Component, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { VideoplayerService } from '../videoplayer.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() childMessage: any;
  public disablePlay= false;
  public disablePause =  false;
  public data:any=[]


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private videoplayerService: VideoplayerService) { }

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
  likeVideo(){
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
     document.getElementById("likebutton").innerHTML = localStorage.clickcount;
    }
  
  }
  unlikeVideo(){
    if (typeof(Storage) !== "undefined") {
      if (localStorage.reducecount) {
        localStorage.reducecount = Number(localStorage.reducecount)+1;
      } else {
        localStorage.reducecount = 1;
      }
      document.getElementById("unlikebutton").innerHTML = localStorage.reducecount;
      // this.videoplayerService.getDataOnLoad()._subscribe(data=>)likes
    }
  }

}
