import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Api} from "../../providers/api/api";
import {Observable} from "rxjs/Observable";
import {BiyoneService} from "../../providers/api/biyone.service";


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];
  list:  any[];

  constructor(private api: Api, public navCtrl: NavController, private biyoneService: BiyoneService) {
    this.loadVals()
  }

  firm: Firm;


  loadVals() {
    this.api.getAllDiscounts().snapshotChanges().subscribe(discounts => {
      this.cardItems = discounts
    })

   // this.li
    //this.cardItems.forEach(list)
/*
    this.cardItems
      .subscribe(res => {
        res.forEach(lists => {
          res.push(this.biyoneService.getFirm(lists.key).valueChanges()
            //  .snapshotChanges()
            //   .map( action => {
            //      return action.map(c => ({key: c.payload.key, ... c.payload.val()}))
          )
        })
      })
      */


  }


}
