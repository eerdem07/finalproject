import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { SoruEkleComponent } from './components/soru-ekle/soru-ekle.component';
import { SoruDuzenleComponent } from './components/soru-duzenle/soru-duzenle.component';
import { FirebaseServiceService } from './services/firebaseService.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SoruEkleComponent,
    SoruDuzenleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
