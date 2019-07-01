import { Filtro, Semestre } from './../model/Filtro';
import { Professor } from './../model/Professor';
import { ProfessorService } from './../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { UtilProvider } from '../services/util';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {

  professor: Professor = JSON.parse(localStorage.getItem('professor'));
  semestres: Semestre[] = JSON.parse(localStorage.getItem('semestres'));
  conteudoDisciplina: [] = [];
  filtro = new Filtro();

  duration = 5000;

  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() { }

  async getConteudoDisciplina() {
    console.log(this.filtro);
    const loading = await this.loadingController.create({ message: 'Consultando conteúdo programático' });
    await loading.present();
    this.conteudoDisciplina = [];
    setTimeout(() => {
      this.professorService.getConteudoDisciplina({
        matric: this.professor.matric,
        ano: this.filtro.semestre.ano,
        seqano: this.filtro.semestre.seqano,
        turma: this.filtro.turma,
        discip: this.filtro.disciplina,
        mes: this.filtro.mes.numero
      }).subscribe(
        res => {
          if (res.body) {
            this.conteudoDisciplina = res.body;
          }
          // console.log(this.conteudoDisciplina);
          loading.dismiss();
        });
    }, 100);



  }



  async  salvar() {

    const loading = await this.loadingController.create({ message: 'Atualizando conteúdo programatico' });
    await loading.present();
    this.professorService.atualizarConteudoDisciplina(this.conteudoDisciplina).subscribe(
      res => {
        if (res.body) {
          this.conteudoDisciplina = res.body;
        }
        // console.log(this.conteudoDisciplina);
        loading.dismiss();
      },
      error => { loading.dismiss(); }
    );


  }



}