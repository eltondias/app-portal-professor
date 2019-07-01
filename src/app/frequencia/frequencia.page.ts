import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Filtro } from '../model/Filtro';
import { UtilProvider } from '../services/util';
import { ProfessorService } from '../services/professor.service';
import { Professor } from '../model/Professor';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {

  professor: Professor = JSON.parse(localStorage.getItem('professor'));
  filtro = new Filtro();
  dataAula: Date;
  aulas =  [1, 2, 3, 4];
  alunos = [];
  
  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }


  async getFrequenciaAlunos() {

    console.log(this.dataAula.toLocaleDateString());
 
    console.log(this.filtro);
    const loading = await this.loadingController.create({ message: 'Consultando conteúdo programático' });
    await loading.present();
    this.alunos = [];
    setTimeout(() => {
      this.professorService.getFrequenciaAlunos({
        matric: this.professor.matric,
        ano: this.filtro.semestre.ano,
        seqano: this.filtro.semestre.seqano,
        turma: this.filtro.turma,
        discip: this.filtro.disciplina,
        professor: this.professor.matric,
        dia:  this.dataAula.toLocaleDateString()
      }).subscribe(
        res => {
          if (res.body) {
            this.alunos  = res.body;
          }
          console.log(this.alunos)
          loading.dismiss();
        });
    }, 100);



  }

}
