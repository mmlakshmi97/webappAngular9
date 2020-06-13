import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showtime(){
    let date: Date = new Date();  
    alert('hi'+date);
  }

}
