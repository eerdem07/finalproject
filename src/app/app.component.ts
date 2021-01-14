import { Component } from '@angular/core';
import { FirebaseServiceService } from './services/firebaseService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  constructor(
    public servis: FirebaseServiceService
  ) {
  }

  oturumKontrol() {
    this.servis.oturumCheck()
  }

  signOut() {
    this.servis.signOut()
  }
}
