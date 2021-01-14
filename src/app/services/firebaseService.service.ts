import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kayit } from '../models/kayit';
import { Uye } from '../models/uye';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  private dbKayit = '/Kayitlar'
  private dbUye = '/Uye'
  kayitRef: AngularFireList<Kayit>
  uyeRef!: AngularFireList<Uye>
  constructor(
    public db: AngularFireDatabase,
    public Auth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit)
    this.uyeRef = db.list(this.dbUye)
  }

  // KAYITLAR

  soruListele() {
    return this.kayitRef
  }

  soruEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit)
  }

  soruDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit)
  }

  soruSil(key: string) {
    return this.kayitRef.remove(key)
  }

  // UYE

  signIn(mail: string, password: string) {
    return this.Auth.signInWithEmailAndPassword(mail, password)
  }

  signUp(uye: Uye) {
    return this.Auth.createUserWithEmailAndPassword(uye.mail, uye.parola)
  }

  signOut() {
    return this.Auth.signOut()
  }

  oturumCheck() {
    if (localStorage.getItem("user")) {
      return true
    } else {
      return false
    }
  }

}
