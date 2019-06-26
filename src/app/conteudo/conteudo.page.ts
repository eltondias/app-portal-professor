import { Filtro } from './../model/Filtro';
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


  professor: Professor;
  semestres: [] = JSON.parse(localStorage.getItem('semestres'));
  turmas: [] = [];
  disciplinas: [] = [];
  peridoSelecionado: string;
  filtro = new Filtro();


  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.professor = JSON.parse(localStorage.getItem('professor'));
    this.getPeriodo();    
  }


  getPeriodo() {
    //  this.util.loading('Consultando pagamentos', 1000);
     this.filtro = new Filtro();
     this.turmas = [];
     this.disciplinas = [];

    if (this.peridoSelecionado) {
      const p = this.peridoSelecionado.split("|");
      this.filtro.ano = p[0];
      this.filtro.seqano = p[1];
    } else {
      const ultimo = <any>this.semestres[this.semestres.length - 1];
      this.filtro.ano = ultimo.ano;
      this.filtro.seqano = ultimo.seqano;
      this.peridoSelecionado =  this.filtro.ano + '|' + this.filtro.seqano;
    }

    this.getTurmas();
  }


  getTurmas() {
    this.turmas = [];
    this.professorService.getTurmas(
      {
        matricula: this.professor.matric, 
        ano: this.filtro.ano, 
        seqano:  this.filtro.seqano      
    }
    ).subscribe(res => {
      if(res.body) {        
        this.turmas = res.body; 
      }      
      console.log( this.turmas);
    });
  }


  getDisciplinas() {
    this.disciplinas = [];
    this.professorService.getDisciplinas({
              matricula: this.professor.matric, 
              ano: this.filtro.ano, 
              seqano:  this.filtro.seqano, 
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
