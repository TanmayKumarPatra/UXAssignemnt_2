import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { PlayerComponent } from './videoplayer/player/player.component';
import { ControlsComponent } from './videoplayer/controls/controls.component';
import { PlaylistComponent } from './videoplayer/playlist/playlist.component';
import { AddnewvideoComponent } from './addnewvideo/addnewvideo.component';
import { VideoPlayerModule } from './videoplayer/videoplayer.module';
import { StorageServiceModule} from 'angular-webstorage-service';
import {  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VideoplayerComponent,
    PlayerComponent,
    ControlsComponent,
    PlaylistComponent,
    AddnewvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoPlayerModule,
    HttpModule,
    StorageServiceModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
