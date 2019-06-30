 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotaPage } from './nota.page';
import { FiltroComponent } from '../componentes/filtro/filtro.component';
import { MaterialModule } from '../material.module';
import { ComponentesModule } from '../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: NotaPage
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
  declarations: [NotaPage]
})
export class NotaPageModule {}
