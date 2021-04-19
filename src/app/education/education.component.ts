import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
    appComponent.comp = false;
  }

  ngOnInit(): void {
  }

}
