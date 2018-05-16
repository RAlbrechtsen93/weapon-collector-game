import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weapon: string;
  weapons: string[] = [];
 
  
  
  constructor(public navCtrl: NavController) {
    
  }
  addWeapon(){
    this.weapons.push(this.weapon);
    this.weapon = "";
  }  
  
  deleteWeapon(item){
    var index = this.weapons.indexOf(item, 0);
    if (index > -1) {
      this.weapons.splice(index, 1);
    }
    console.log("this weapon was deleted", item);
  }
}
