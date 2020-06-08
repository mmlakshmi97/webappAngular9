import { Component } from '@angular/core';

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
}
