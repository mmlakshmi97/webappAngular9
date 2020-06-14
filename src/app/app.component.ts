import { Component, ViewChild } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-dream-app';
  fullImagePath: string = 'assets/logoimage.jpeg';
  studImagePath: string = 'assets/brainimg.jpeg';
  imagePath1: string = 'assets/img1.jpeg';
  imagePath3: string = 'assets/img3.png';
  imagePath5: string = 'assets/img5.jpeg';
  imagePath6: string = 'assets/img6.jpeg';

  // passing data to child
  parentData: string = 'Hi I am parent data';

  // Getting value from child by output decorator
  fromChildData:number;
  methodParent($event){
    this.fromChildData = $event;
  }

  // Getting value from child by viechild decorator
  @ViewChild(Comp1Component) childRef;
  fromChildData2:string;
  ngAfterViewInit(){
    this.fromChildData2 = this.childRef.viewChildData;
  }
}
