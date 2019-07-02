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
  alunosSalvar = [];
  numeroAulas = [];
  
  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }


  async getFrequenciaAlunos() {

    this.numeroAulas = [];
    for (let i = 0; i <= this.filtro.numeroAula; i++) {
      this.numeroAulas.push({valor: i }); 
    }

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
            res.body.forEach(aluno => {
              this.alunosSalvar.push(aluno)
            });     

            this.alunos  = res.body;                              
          }         
          this.convertAulas();
          loading.dismiss();
        });
    }, 100);
  }



  convertAulas() {
 
    // for (let i = 0; i < this.alunos.length; i++) {
    //   const presencasString = Array.from( this.alunos[i].presenca.replace(/\s/g, ''));
      
    //   while(presencasString.length < this.alunos[i].aula) {
    //     presencasString.push('0');
    //   }

    //   const presencasBolean = []; 
    //   presencasString.forEach(valor => {
    //     presencasBolean.push((valor === '1')? true: false);
    //   });     
    //   this.alunos[i].presenca = presencasBolean;
    // }

    for (let i = 0; i < this.alunos.length; i++) {
      const presencasString = Array.from( this.alunos[i].presenca.replace(/\s/g, ''));
      
      while(presencasString.length < this.alunos[i].aula) {
        presencasString.push('0');
      }

      this.alunos[i].presenca = 0;
      presencasString.forEach(valor => {
        this.alunos[i].presenca += (valor === '1')? 1: 0;
      });     
     
    }

     

    console.log(this.alunos);
  }

  salvarFrequencias() {
   
  for (let i = 0; i <  this.alunos.length; i++) {
    let presenca = '';
    for (let i = 0; i < this.alunos[i].presenca; i++)  
      presenca += '1';      
    
      this.alunosSalvar[i].presenca =  presenca;
      presenca = '';
  }


    console.log(this.alunosSalvar)   

  }




}
