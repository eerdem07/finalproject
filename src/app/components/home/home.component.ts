import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { Sonuc } from 'src/app/models/sonuc';
import { FirebaseServiceService } from 'src/app/services/firebaseService.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adsoyad!: string;
  uid!: string;
  yeniUye: Kayit = new Kayit()
  sonuc: Sonuc = new Sonuc();
  kayitlar: Kayit[] = [];
  constructor(
    public servis: FirebaseServiceService,
    public router: Router

  ) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user")!);
    this.adsoyad = user.displayName
    this.uid = user.uid
    this.soruListele()
  }

  soruListele() {
    this.servis.soruListeleByUID(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = []
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key }
        this.kayitlar.push(y as Kayit)
      })
    })
  }

  soruEkleControl() {
    this.sonuc.islem = true
  }
}
