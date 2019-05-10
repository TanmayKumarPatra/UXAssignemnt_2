import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PlaylistComponent } from '../playlist/playlist.component';
import { VideoplayerService } from '../videoplayer.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoSource;
  @Input() videoPlayercomponetn;
  @Input() PlaylistCompont;
  @Input() videoUrl: any;
  parentMessage;
  constructor(private videoplayerService: VideoplayerService) {
    
   }

  ngOnInit() {
    this.videoSource = '/assets/video1.mp4';
    // this.parentMessage = this.videoplayer.nativeElement 
    this.videoPlayercomponetn = this.videoplayer
    this.parentMessage = this.videoPlayercomponetn;
    console.log('parentMessage', this.parentMessage)
    console.log('this.videoSource', this.videoSource)
    console.log(' this.videoPlayercomponetn',  this.videoPlayercomponetn)
    console.log('videoUrl', this.videoUrl);
  }
  getNotification(data){
    // this.PlaylistCompont = this.videoSource;
    /* this.videoSource.subscribe((x)=> x = this.PlaylistCompont);
    console.log('this.PlaylistCompont', this.PlaylistCompont); */
    console.log(data);
    this.videoSource  = 'assets/'+ data;
    console.log(this.videoSource);
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
  }
}
