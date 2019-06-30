import { MaterialModule } from './../material.module';
import { FiltroComponent } from './filtro/filtro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FiltroComponent],
  exports: [FiltroComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule
  ]
})
export class ComponentesModule { }
