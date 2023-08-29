import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dash1Component } from '../modules/dash1/dash1.component';

@Injectable({
  providedIn: 'root'
})
export class SkillsdropdownService {

private skillsUrl= 'http://localhost:9000/skill';
//private skillsUrl1= 'http://localhost:9000/skill/selected';
  constructor(private http: HttpClient) { }

getskillsList(): Observable<any>{
  return this.http.get<any>(this.skillsUrl + '/getskill')
}
postskillsList(skill:string[]): Observable<any>{
  const headers=new HttpHeaders({'content-Type':'application/json'});
  const body={selectedskills:skill}

  return this.http.post<any>(this.skillsUrl+'/selected',body,{headers})
}

}
