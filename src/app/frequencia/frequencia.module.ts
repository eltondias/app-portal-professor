import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FrequenciaPage } from './frequencia.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: FrequenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FrequenciaPage],
  // providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class FrequenciaPageModule {}
