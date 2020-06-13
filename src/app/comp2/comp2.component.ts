import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  varopenslider: boolean = false;
  openslider(){
    this.varopenslider = !this.varopenslider;
  }
  imagePath1: string = 'assets/img1.jpeg';
  imagePath2: string = 'assets/img5.jpeg';
  imagePath3: string = 'assets/img6.jpeg';
  // @Input() hero: Hero;
  // @Input('master') masterName: string;

}
