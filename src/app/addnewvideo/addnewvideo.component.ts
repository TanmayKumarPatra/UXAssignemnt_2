import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-addnewvideo',
  templateUrl: './addnewvideo.component.html',
  styleUrls: ['./addnewvideo.component.scss']
})
export class AddnewvideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 /*  onSubmit(){
    console.log('hi')
  } */
  Register(regForm:NgForm){  
    console.log(regForm);  
  }  

}
