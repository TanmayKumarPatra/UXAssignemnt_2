import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  
  @Input() videoPlayercomponetn;
  parentMessage;
  constructor() {
    
   }

  ngOnInit() {
    // this.parentMessage = this.videoplayer.nativeElement 
    this.videoPlayercomponetn = this.videoplayer
    this.parentMessage = this.videoPlayercomponetn;
    console.log('parentMessage', this.parentMessage)
    console.log(' this.videoPlayercomponetn',  this.videoPlayercomponetn) 
  }
}
