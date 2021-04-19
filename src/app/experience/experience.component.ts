import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
declare var $: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
    appComponent.comp = false;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    $.getScript('../assets/js/contentWayPoint.js');
  }

}