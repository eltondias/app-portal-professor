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
  ano: string;
  semestre: string;
  peridoSelecionado: string;

  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.professor = JSON.parse(localStorage.getItem('professor'));
    this.getPeriodo();
  }


  getPeriodo() {
     this.util.loading('Consultando pagamentos', 1000);
    if (this.peridoSelecionado) {
      const p = this.peridoSelecionado.split("|");
      this.ano = p[0];
      this.semestre = p[1];
    } else {
      const ultimo = <any>this.semestres[this.semestres.length - 1];
      this.ano = ultimo.ano;
      this.semestre = ultimo.seqano;
      this.peridoSelecionado = this.ano + '|' + this.semestre;
    }

    console.log(this.peridoSelecionado);
    // this.getMensalidades();
  }


}
