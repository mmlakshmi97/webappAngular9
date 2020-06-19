import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './dragComponent.component.html',
  styleUrls: ['./dragComponent.component.sass']
})
export class dragComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  //Drag and drop functionality
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];
}
