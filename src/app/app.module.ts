import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { Service1Service } from "./service1.service";
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Module1Module } from './module1/module1.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { dragComponent } from './dragComponent/dragComponent.component';
import { FirstpipePipe } from './firstpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ProductListComponent,
    ProductDetailComponent,
    dragComponent,
    FirstpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(Service1Service),
    NgbModule,
    Module1Module,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
