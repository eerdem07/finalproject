import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { FirebaseServiceService } from 'src/app/services/firebaseService.service';

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
    public router: Router
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


}
