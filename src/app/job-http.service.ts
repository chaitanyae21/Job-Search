import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import {HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobHttpService {

  public baseUrl = 'https://nut-case.s3.amazonaws.com/jobs.json';

  constructor(private _http:HttpClient) { 
      console.log("job http service is called");
  }

  

  public getAllJobs(){
    let Response = this._http.get(this.baseUrl);
    console.log(Response);
    return Response;
  }

}
