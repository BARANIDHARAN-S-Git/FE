import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SkillsdropdownService } from 'src/app/services/skillsdropdown.service';

import { ManagernameService } from 'src/app/services/managername.service';

import {HttpClient} from '@angular/common/http'

import { Skill} from './skills';

 

@Component({

  selector: 'app-dash1',

  templateUrl: './dash1.component.html',

  styleUrls: ['./dash1.component.scss']

 

})

 

export class Dash1Component implements OnInit {

  // manager!: Manager[];

 

  Skills: any = [];

 

  selectedManager : any;

 

  managerSet : any [] = [];

 

  skillSet: any[] = [];

 

  selectedSkill: any;
  ski:any[]=[];

 

  questions: any = [

    {

      question: 'What is angular?',

      skill: 'radio'

    },

    {

      question: 'What is java?',

      skill: 'checkbox'

    }

  ];

 

constructor(

  private skillsdropdownservice : SkillsdropdownService,

  private managernameService : ManagernameService){

 

}

 

  ngOnInit() {

    this.reloadData();

    this.loadManagerNames();

 

  }

 

 

reloadData() {

 

  console.log('hi from Client');

 

   this.skillsdropdownservice.getskillsList().subscribe(data => {

this.skillSet = data;

 

   console.log(data);

 

    console.log('Users:' + JSON.stringify(this.selectedSkill));

 

   

 

    });

 

   

 

  }

 

  loadManagerNames(){

    this.managernameService.getManagerNames().subscribe(data => {

      this.managerSet = data;

  });

 

}

 

loadQuestions(selectedSkill: string) {

 

  // const url = `http://localhost:9000/questions?skill=${selectedSkill}`;

 

  // this.http.get<any[]>(url).subscribe(data => {

 

  //   this.questions = data; // Store questions

 

  // });

 

}

 

 

onSkillChange(selectedSkill: string) {

 

  this.loadQuestions(selectedSkill);

 

}

 

submitForm(){

  // console.log('Selected Managername :', this.selectedManager);

  // console.log('Selected Skills :', this.selectedSkill);

  // const selectedoption=this.selectedSkill;

  // this.skillsdropdownservice.postkillsList().subscribe(data => {

  // });

  //this.http.post()
  console.log(this.selectedSkill)
  for(let g of this.selectedSkill){
    this.ski.push(g.skills)
  }
  this.skillsdropdownservice.postskillsList(this.ski).subscribe(response =>{
    console.log(response)

  });

}

 

}

 