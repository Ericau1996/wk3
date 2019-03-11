import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import{ModalPage} from '../modal/modal.page';
import{ModalController} from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  clickCounter=0;
  contactName:string;
  constructor(private modalController: ModalController){

  }
  ngOnInit(){

  }
  login(){
    this.clickCounter++;
    this.router.navigateByUrl('/account/'+ contactName);
  }
  async presentModal(){
    const modal = await this.modalController.create({
      component:ModalPage,
      componentProps:{contactName:this.contactName}
    });
  }
  itemClicked(){
    this.clickCounter++;
  }
}