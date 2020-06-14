import { Component, Inject, Injectable, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  constructor(private modalService: NgbModal) {
      this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }

  ngOnInit(): void {
  }

  showtime(){
    let date: Date = new Date();  
    alert('hi'+date);
  }
  closeResult: string;
  currdate: Date;
  modalOptions:NgbModalOptions;
  
  open(content) {
    this.currdate = new Date(); 
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  // sharing data - getting from parent
  @Input() childData:string;

  //sharing data - send to parent
  @Output() parentOutput = new EventEmitter<number>();
  incremenval:number = 1;
  incrChildClick(){
    this.incremenval++;
    this.parentOutput.emit(this.incremenval); 
  }
  decrChildClick(){
    this.incremenval--;
    this.parentOutput.emit(this.incremenval); 
  }
  // sharing data - getting from parent by viewchild
  viewChildData: string = 'Hi Angular9';
  decrChildViewClick(){
    this.incremenval = 0;
    this.parentOutput.emit(this.incremenval); 
  }
  incrChildViewClick(){
    this.incremenval = 1;
    this.parentOutput.emit(this.incremenval); 
  }
}
