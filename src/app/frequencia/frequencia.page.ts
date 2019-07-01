import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Filtro } from '../model/Filtro';
import { UtilProvider } from '../services/util';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {

  filtro = new Filtro();
  dataAula: any;
  aulas =  [1, 2, 3, 4];
  
  constructor(
    private util: UtilProvider,
    private professorService: ProfessorService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async getFrequanciaAlunos() {
    console.log(this.filtro)
    const loading = await this.loadingController.create({ message: 'Consultando frequência' });
    await loading.present();
    loading.dismiss();
  }

}
