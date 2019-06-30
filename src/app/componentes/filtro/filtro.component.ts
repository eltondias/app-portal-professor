import { Filtro } from './../../model/Filtro';
import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/model/Professor';
import { Semestre } from 'src/app/model/Filtro';
import { UtilProvider } from 'src/app/services/util';
import { ProfessorService } from 'src/app/services/professor.service';

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

  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {}


  getTurmas() {
    console.log(this.filtro);
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
      console.log( this.turmas);
    });
  }


  getDisciplinas() {
    console.log( this.filtro.turma);
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
        console.log( this.disciplinas);
    });
  }

  getMeses() {
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
    });
  }


  getAvaliacoes() {
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
    });
  }


}