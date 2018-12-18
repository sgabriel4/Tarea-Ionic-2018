import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

// Nota: (1) Importa módulos de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Nota (2) Credenciales y configuración inicial de firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAH0oeEofjWmh0_lBaY_rx67Mlb7uQLh08",
    authDomain: "chatapp-24642.firebaseapp.com",
    databaseURL: "https://chatapp-24642.firebaseio.com",
    projectId: "chatapp-24642",
    storageBucket: "chatapp-24642.appspot.com",
    messagingSenderId: "545865699364"
};

// Importa páginas (custom elements)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessageProvider } from '../providers/message/message';

// Para el inicio de sesion

import { SignInPage } from '../pages/signin/signin';
import { SignUpPage } from '../pages/signup/signup';
import { AuthService } from '../providers/auth-service';
import { UsuarioPage } from '../pages/usuario/usuario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Nota (3) Importa módulos
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    MessageProvider,
    Camera
  ]
})
export class AppModule { }
