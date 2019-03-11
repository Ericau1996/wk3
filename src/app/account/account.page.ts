import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  contactName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.contactName = this.route.snapshot.paramMap.get('contactName');
  }

}
