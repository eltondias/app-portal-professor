import { AuthGuardService } from './auth-guard.service';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilProvider } from './services/util';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  exibirMenu = true;

  public appPages = [
    {
      title: 'Início',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Conteúdo programático',
      url: '/conteudo',
      icon: 'chrome_reader_mode'
    },
    {
      title: 'Lançamento de nota',
      url: '/nota',
      icon: 'note_add'
    },
    {
      title: 'Lançamento de Frequência',
      url: '/frequencia',
      icon: 'done_all'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authGuard: AuthGuardService,
    public router: Router,
    public util: UtilProvider
  ) {
    this.initializeApp();
    this.exibirMenu = this.authGuard.canActivate();
  }

  ngOnInit() {
    this.exibirMenu = this.authGuard.canActivate();
    this.authGuard.authEmitter.subscribe(autenticado => {
      this.exibirMenu = autenticado;
    });

    this.util.menuEmitter.subscribe( retorno => {
      this.exibirMenu = retorno;
    });

  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logOut() {
    localStorage.removeItem('professor');
    localStorage.removeItem('semestres');
    const retorno = this.util.loading('Até mais...', 500);
    retorno.then(()=>{
      this.router.navigate(['login']);
    this.exibirMenu = false;
    })
  }

}
