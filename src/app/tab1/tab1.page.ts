import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  clickCounter=0;
  contactName:string;
  constructor(){

  }
  ngOnInit(){

  }
  login(){
    this.clickCounter++;
  }
  async presentModal(){
  }
  itemClicked(){
    this.clickCounter++;
  }
}