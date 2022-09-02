import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAlumnoPageRoutingModule } from './registro-alumno-routing.module';

import { RegistroAlumnoPage } from './registro-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAlumnoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroAlumnoPage]
})
export class RegistroAlumnoPageModule {}
