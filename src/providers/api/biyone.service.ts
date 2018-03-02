import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Storage} from "@ionic/storage";


@Injectable()
export class BiyoneService {
  constructor(private angularFB: AngularFireDatabase, private angularAuth: AngularFireAuth,private storage: Storage) {

  }
  getUserStatus(){
       return this.storage.get('user');
    }
  }

