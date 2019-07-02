import { Component } from '@angular/core';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  professor = JSON.parse(localStorage.getItem('professor'));

  menus = [
        {nome: 'Conteúdo', descricao: 'Conteúdo programático', link: '', imagem: 'conteudo_programatico.png'},
        {nome: 'Frequência', descricao: 'Lançamento de frequência', link: '', imagem: 'lancamento_frequencia.png'},
        {nome: 'Notas', descricao: 'Lançamento de notas', link: '', imagem: 'lancamento_notas.png'},
      ]


  constructor(
 
    private util: UtilProvider,
 
) { }




}


