import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { Uye } from 'src/app/models/uye';
import { FirebaseServiceService } from 'src/app/services/firebaseService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sonuc: Sonuc = new Sonuc()
  mesaj: string = ''
  yeniUye: Uye = new Uye()
  constructor(
    public servis: FirebaseServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }


  signUp() {
    this.servis.signUp(this.yeniUye).then(d => {
      d.user!.updateProfile({
        displayName: `${this.yeniUye.ad} ${this.yeniUye.soyad}`
      }).then(() => {
        this.yeniUye.uid = d.user!.uid
        localStorage.setItem("user", JSON.stringify(d.user))
        this.addAccount()
      })
    }, err => {
      this.sonuc.islem = false
      this.sonuc.mesaj = "Hata oluştur."
      this.mesaj = this.sonuc.mesaj
    })
  }

  addAccount() {
    this.servis.addAccount(this.yeniUye).then(d => {
      this.router.navigate(['/'])
    })
  }

}
