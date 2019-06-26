import { Professor } from './../model/Professor';
import { UtilProvider } from './../services/util';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { SemestreService } from '../services/semestre.service';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  erroLogin = false;
  erroAutenticacao = false;
  professor = new Professor();

  constructor(
    private professorService: ProfessorService,
    public loadingController: LoadingController,
    public util: UtilProvider,
    public router: Router,
    private authGuard: AuthGuardService

  ) { }

  ngOnInit() { 
    const professor = localStorage.getItem('professor');
    if (professor) {
      this.router.navigate(['home']);
      return false;
    }
  }

  login() {

    this.erroAutenticacao = false;
    this.erroLogin = false;

    const retorno = this.util.loading('Autenticando...', 2000);
    this.professorService.login({ email: this.professor.email, senha: this.professor.senha }).subscribe(
      (res) => {                    
        setTimeout(() => {
          if (res.body) {
            this.professor = res.body;
            this.getSemestres();
            localStorage.setItem('professor', JSON.stringify(this.professor));
            console.log(this.professor);                            
            this.authGuard.authEmitter.emit(true);
          } else {
            this.erroAutenticacao = true;
          }
        }, 1000);             
      },
      (error: HttpErrorResponse) => {     
        retorno.then(() =>{
          console.log(error);
          this.erroLogin = true;
        });        
      }
    );
  }

  getSemestres(){
    this.professorService.getSemestres({matricula: this.professor.matric}).subscribe(res => {
      console.log(res);
      if(res.body) {        
        localStorage.setItem('semestres', JSON.stringify(res.body));
        window.location.reload();
      }      
    });
  }


}
