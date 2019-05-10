import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { VideoplayerService } from '../videoplayer.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  private videoList: any = [];
  @Input() PlaylistCompont: any;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  private srcvideo;
  constructor(private videoplayerService: VideoplayerService) { }

  ngOnInit() {
    this.videoplayerService.getDataOnLoad().subscribe((data) => {
      // this.videoList = data.json();
      // this.videoList = Array.of(data.json());
      this.videoList = data.json();

      // this.videoList = JSON.parse(JSON.stringify(this.videoList));
      console.log('this.videoList', this.videoList.youtube)
    })
  }
  playVideo(src: string){
    this.srcvideo = src;
  //   // console.log('this.srcvideo', this.srcvideo)
   this.notifyParent.emit(this.srcvideo);
    // this.PlaylistCompont = src;
  }



}
