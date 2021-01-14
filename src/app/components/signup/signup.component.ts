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
  ) { } structor() { }

  ngOnInit() {
  }

}
