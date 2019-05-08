import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() childMessage: any;

  constructor() { }

  ngOnInit() {
  }
  playPause(){
    this.childMessage.nativeElement.play();
  }
  pauseVideo(){
    this.childMessage.nativeElement.pause();
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
  }
  mutedVideo(){
    
  }

}
