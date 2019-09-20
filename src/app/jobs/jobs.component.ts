import { Component, OnInit } from '@angular/core';
import { JobHttpService } from '../job-http.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public allJobs;
  public company:string;
  public place:string;
  public exp:string;
  constructor(public jobhttpservice:JobHttpService) { 
    console.log("job component constructor is called");
  }

  ngOnInit() {
    console.log("ngOninit is called")
    this.jobhttpservice.getAllJobs().subscribe(
      data => {
        console.log(data);
        this.allJobs = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }

  public getJob(Company,Location,Experience):any{
    if(Company)
    {
      this.getJobInCompany(Company);
    }
    if(Location)
    {
      this.getJobInLocation(Location);
    }
    if(Experience)
    {
      this.getJobWithExperience(Experience);
    }
    
  }



public getJobInCompany(Company:string):any{
  let result: Array<string> = [];
  for(let x of this.allJobs){
      if(x.companyname == Company ){
          result.push(x);
      }

  }
  this.allJobs = result;
}

public getJobInLocation(Location:string):any{
  let result: Array<string> = [];
  for(let x of this.allJobs){
      if(x.location == Location ){
          result.push(x);
      }

  }
  this.allJobs = result;
}

public getJobWithExperience(Experience:string):any{
  let result: Array<string> = [];
  for(let x of this.allJobs){
      if(x.experience == Experience ){
          result.push(x);
      }

  }
  this.allJobs = result;
}



}
