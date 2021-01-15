import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kayit } from '../models/kayit';
import { Uye } from '../models/uye';
import { AngularFireAuth } from '@angular/fire/auth'
import { Kategori } from '../models/kategori';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  private dbKayit = '/Kayitlar'
  private dbUye = '/Uye'
  private dbKategori = '/Kategori'

  kayitRef: AngularFireList<Kayit>
  uyeRef!: AngularFireList<Uye>
  kategoriRef!: AngularFireList<Kategori>
  constructor(
    public db: AngularFireDatabase,
    public Auth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit)
    this.uyeRef = db.list(this.dbUye)
    this.kategoriRef = db.list(this.dbKategori)
  }

  // KAYITLAR

  soruListele() {
    return this.kayitRef
  }

  soruListeleByUID(uid: string) {
    return this.db.list("/Kayitlar", q => q.orderByChild("uid").equalTo(uid))
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

  signUpWithGoogle() {

  }

  addAccount(uye: Uye) {
    return this.uyeRef.push(uye)
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

  // Kategori Ekle

  addCategory(kategori: Kategori) {
    return this.kategoriRef.push(kategori)
  }

}
