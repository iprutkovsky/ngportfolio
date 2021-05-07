import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
    appComponent.comp = false;
    appComponent.loading = false;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // owl carousel
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  }

}
