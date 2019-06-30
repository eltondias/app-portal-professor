import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConteudoPage } from './conteudo.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: ConteudoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ComponentesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConteudoPage]
})
export class ConteudoPageModule {}
