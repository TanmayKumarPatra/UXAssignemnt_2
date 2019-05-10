import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/* import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'; */
/* import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; */
import { map } from "rxjs/operators"
// import { catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class VideoplayerService {
  private commonURI: string;
  private storelist:any;
  constructor(private http: Http) {
    this.commonURI = 'assets/mockData/playList.json';
   }
   getDataOnLoad() {
    /* return  this.http.get(this.commonURI)
      .pipe(map((data: any) => {
        console.log('data', data);
      return data;
      },
      (error: any) => {
      })); */
      return this.http.get(this.commonURI);      
    }
  }
