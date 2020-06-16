import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsidemoulecompComponent } from './insidemoulecomp/insidemoulecomp.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [InsidemoulecompComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    InsidemoulecompComponent
  ]
})
export class Module1Module { 

}
