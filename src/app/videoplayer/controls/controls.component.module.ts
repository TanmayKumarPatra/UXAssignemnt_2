import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ControlsComponent } from './controls.component';

const controlRoutes: Routes = [
    {
      path: 'controls',
      component: ControlsComponent,
       }
     
  ]; 
  @NgModule({
      imports: [
        RouterModule.forChild(controlRoutes),
      ],
    exports: [
        RouterModule,
      ],
  })
  export class cControlsModule { }