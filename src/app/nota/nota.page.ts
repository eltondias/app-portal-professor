import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Filtro } from '../model/Filtro';
import { ProfessorService } from '../services/professor.service';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {

  filtro = new Filtro();
  alunos = [];
  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async getNotasAlunos() {
    this.alunos  = [];
    console.log(this.filtro);
    const loading = await this.loadingController.create({ message: 'Consultando notas' });
    await loading.present();

    setTimeout(() => {
      this.professorService.getNotasAlunosDisciplina({
        ano: this.filtro.semestre.ano,
        seqano: this.filtro.semestre.seqano,
        turma: this.filtro.turma,
        discip: this.filtro.disciplina,
        ava: this.filtro.avaliacao.ava
      }).subscribe(
        res => {
          if (res.body) {
            // console.log(res.body);
            this.alunos = res.body;
          }
          loading.dismiss();

        });
    }, 100);



  }

}
