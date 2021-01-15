import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { FirebaseServiceService } from 'src/app/services/firebaseService.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sonuc: Sonuc = new Sonuc()
  mesaj: string = ''
  constructor(
    public servis: FirebaseServiceService,
    public router: Router,
    private readonly authService: AuthService,
    private readonly auth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  singIn(mail: string, password: string) {
    this.servis.signIn(mail, password).then(p => {
      localStorage.setItem("user", JSON.stringify(p.user))
      this.router.navigate(['/'])
    }, err => {
      this.sonuc.islem = false
      this.sonuc.mesaj = "Giriş Yapılamadı! Kontrol Ediniz.!"
      this.mesaj = this.sonuc.mesaj
    })
  }

  gmailLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredential) => {
        localStorage.setItem("user", JSON.stringify(userCredential.user))
        this.router.navigate([""])
      })
  }

  async githubLogin() {
    const userCredential = await this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    localStorage.setItem("user", JSON.stringify(userCredential.user))
    await this.router.navigate([""])
  }

}