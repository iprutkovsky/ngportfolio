import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    $.getScript('../assets/js/contentWayPoint.js');
  }

}