import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import {Facebook} from "@ionic-native/facebook";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Storage} from "@ionic/storage";


@Injectable()
export class AuthService {
  constructor(private face: Facebook, private angularDB: AngularFireDatabase,
              private angularAuth: AngularFireAuth,
              private storage: Storage) {  }

  facebookLogin(): Promise<any> {
    return this.face.login(['email'])
      .then(response => {
        const credantial = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        this.angularAuth.auth.signInWithCredential(credantial)
          .then(success => {
            this.face.api('me?fields=id,name,email,picture.width(720).height(720).as(picture_large)', [])
              .then(profile => {
                const userData = {
                  uid: success.uid,
                  email: profile['email'],
                  picture_large: profile['picture_large']['data']['url'],
                  username: profile['name'],
                  method: 'Facebook'
                };
                this.saveUser(userData).then(() =>
                  console.log('saved'))
              })
          })
      }).catch((err) => {
        console.log(err)
      })
  }

  private saveUser(userData) {
    const uid = userData.uid;
    return this.angularDB.list('mobileUsers/')
      .set(uid, userData).then((res) => {
        this.storage.set('mobileUser', userData)
      })

  }

  hasLoggedIn(){
    return this.storage.get('mobileUser');
  };

  signOut() {
    this.angularAuth.auth.signOut()
      .then(() => {
        this.storage.remove('mobileUser')
      })
  };

  getUserStatus(){
    return this.storage.get('user');
  }

  emailLogin(){
    // TODO: Email
  }

}

