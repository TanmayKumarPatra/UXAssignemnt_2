import { Component, OnInit } from '@angular/core';
import { VideoplayerService } from '../videoplayer.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  video = [];
  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit() {
   this.videoplayerService.getDataOnLoad().subscribe((data)=>{
      this.video = data.youtube;
      console.log('this.members', this.video )
    })
  }
 
  

}
