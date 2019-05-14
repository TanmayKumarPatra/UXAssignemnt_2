import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ControlsComponent } from './controls/controls.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddnewvideoComponent } from '../addnewvideo/addnewvideo.component';
// import { VideoplayerComponent } from './videoplayer.component';

const videoPlayerRoutes: Routes = [
    {path: 'controls', component: ControlsComponent},
    {path: 'player',   component: PlayerComponent},
    {path: 'playlist', component: PlaylistComponent},
    {path: 'addvideo', component: AddnewvideoComponent}
]
@NgModule({
    imports: [
        RouterModule.forRoot(videoPlayerRoutes, {useHash: false}),
    ],

    // declarations: [VideoplayerComponent],
    exports: [RouterModule]
})
export class VideoPlayerModule {

}