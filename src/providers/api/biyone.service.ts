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
       .snapshotChanges()
       .map((items => {
         return items.map((firma) => {
            firma.payload. =
         })
       }))
  }

  getAllDiscounts1() {
    return this.angularDB.list('myDiscounts')
      .snapshotChanges().map( action => {
        return action.map(c => ({ key: c.payload.key ,... c.payload.val()}));
      });

  }


  }

