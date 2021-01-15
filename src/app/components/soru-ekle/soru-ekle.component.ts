import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { FirebaseServiceService } from 'src/app/services/firebaseService.service';

@Component({
  selector: 'app-soru-ekle',
  templateUrl: './soru-ekle.component.html',
  styleUrls: ['./soru-ekle.component.css']
})
export class SoruEkleComponent implements OnInit {
  seciliKayit: Kayit = new Kayit()
  constructor(
    public servis: FirebaseServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  soruEkle() {
    let user = JSON.parse(localStorage.getItem("user")!)
    this.seciliKayit.uid = user.uid
    let tarih = new Date()
    this.seciliKayit.kayTarih = tarih.getTime().toString()
    this.seciliKayit.duzTarih = tarih.getTime().toString()
    this.servis.soruEkle(this.seciliKayit).then(d => {
      this.router.navigate(['/'])
    })
  }

}
