import { async } from '@angular/core/testing';
import { Filtro } from './../../model/Filtro';
import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/model/Professor';
import { Semestre } from 'src/app/model/Filtro';
import { UtilProvider } from 'src/app/services/util';
import { ProfessorService } from 'src/app/services/professor.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {

  professor: Professor = JSON.parse(localStorage.getItem('professor')); 
  semestres: Semestre[] = JSON.parse(localStorage.getItem('semestres'));
  turmas: [] = [];
  disciplinas: [] = [];
  meses: [] = [];
  conteudoDisciplina: [] = [];
  avaliacoes: [] = [];


  @Input() filtro: Filtro;
  @Input() exibir_meses = false;
  @Input() exibir_avaliacoes = false;
  @Input() exibir_aulas = false;

  constructor(
    private professorService: ProfessorService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {}


 async getTurmas() {

    const loading = await this.loadingController.create({ message: 'Buscando turmas de ' + this.filtro.semestre.ano + '/' + this.filtro.semestre.seqano  });
    await loading.present();

    this.turmas = [];
    this.disciplinas = [];
    this.meses = [];
    this.avaliacoes = [];
    this.professorService.getTurmas(
      {
        matricula: this.professor.matric, 
        ano: this.filtro.semestre.ano, 
        seqano:  this.filtro.semestre.seqano      
    }
    ).subscribe(res => {
      if(res.body) {        
        this.turmas = res.body; 
      }            
      //console.log( this.turmas);
      loading.dismiss();
    });
  }


  async getDisciplinas() {
    
    const loading = await this.loadingController.create({ message: 'Buscando disciplinas para turma: ' + this.filtro.turma });
    await loading.present();

    this.disciplinas = [];
    this.professorService.getDisciplinas({
              matricula: this.professor.matric, 
              ano: this.filtro.semestre.ano, 
              seqano:  this.filtro.semestre.seqano,      
              turma: this.filtro.turma
          }).subscribe(
      res => {      
        if(res.body) {        
          this.disciplinas = res.body;        
        }      
        loading.dismiss();
    });
  }

  async getMeses() {
    const loading = await this.loadingController.create({ message: 'Buscando meses'});
    await loading.present();

    this.meses = [];
    this.professorService.getMeses({
              matric: this.professor.matric, 
              ano: this.filtro.semestre.ano, 
              seqano:  this.filtro.semestre.seqano,      
              turma: this.filtro.turma,
              discip: this.filtro.disciplina
          }).subscribe(
      res => {      
        if(res.body) {        
          this.meses = res.body;        
        }      
        console.log( this.meses);
        loading.dismiss();
    });
  }


  async getAvaliacoes() {
    const loading = await this.loadingController.create({ message: 'Buscando avaliações'});
    await loading.present();
    this.avaliacoes = [];
    this.professorService.getAvaliacoes({           
              ano: this.filtro.semestre.ano, 
              seqano:  this.filtro.semestre.seqano                   
          }).subscribe(
      res => {      
        if(res.body) {        
          this.avaliacoes = res.body;        
        }      
        console.log( this.avaliacoes);
        loading.dismiss();
    });
  }

  

  exibirCombo() {
    if(this.exibir_meses) {
      this.getMeses();
    }

    if(this.exibir_avaliacoes) {
      this.getAvaliacoes();
    }

  }

}