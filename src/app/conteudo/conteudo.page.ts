import { Filtro, Semestre } from './../model/Filtro';
import { Professor } from './../model/Professor';
import { ProfessorService } from './../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {

  professor: Professor = JSON.parse(localStorage.getItem('professor')); 
  semestres: Semestre[] = JSON.parse(localStorage.getItem('semestres'));
  turmas: [] = [];
  disciplinas: [] = [];
  filtro = new Filtro();

  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {}


  getTurmas() {
    console.log(this.filtro);
    this.turmas = [];
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

}
[]