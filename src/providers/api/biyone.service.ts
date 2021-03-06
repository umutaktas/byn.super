import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Storage} from "@ionic/storage";
import {AuthService} from "./auth.service";



@Injectable()
export class BiyoneService {
  constructor(private angularDB: AngularFireDatabase, private authService: AuthService,private storage: Storage) {

  }

  getAllDiscounts() {
     return this.angularDB.list('myDiscounts')
  }

  getFirm(uid) {
     return this.angularDB.list<Firm>('firms',ref =>
       ref.orderByKey().equalTo(uid))
  }



  }

