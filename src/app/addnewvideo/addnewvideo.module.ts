import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AddnewvideoComponent } from './addnewvideo.component';
/* import { ControlsComponent } from './controls/controls.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component'; */
// import { VideoplayerComponent } from './videoplayer.component';

const addvideoPlayerRoutes: Routes = [
    {path: 'addvideo', component: AddnewvideoComponent},
   
]
@NgModule({
    imports: [
        RouterModule.forRoot(addvideoPlayerRoutes, {useHash: false}),
    ],

    // declarations: [VideoplayerComponent],
    exports: [RouterModule]
})
export class VideoPlayerModule {

}