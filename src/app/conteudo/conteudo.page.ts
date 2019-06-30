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
  conteudoDisciplina: [] = [];
  filtro = new Filtro();
  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {}

  getConteudoDisciplina() {
    console.log(this.filtro);
    this.util.loading('Consultando conteúdo programático', 1000);
    this.conteudoDisciplina = [];
    
    setTimeout(() => {
      this.professorService.getConteudoDisciplina({
        matric: this.professor.matric, 
        ano: this.filtro.semestre.ano, 
        seqano:  this.filtro.semestre.seqano,      
        turma: this.filtro.turma,
        discip: this.filtro.disciplina,
        mes: this.filtro.mes.numero
    }).subscribe(
res => {      
  if(res.body) {        
    this.conteudoDisciplina = res.body;        
  }      
  console.log(this.conteudoDisciplina );
});
    }, 100);
    


  }


}