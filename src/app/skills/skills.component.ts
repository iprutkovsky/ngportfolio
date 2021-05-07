import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RoutingService } from '../routing.service';
declare var $: any;
declare const anime: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  toggleBtn: boolean = false;

  constructor(private appComponent: AppComponent, private routingService: RoutingService) {
    appComponent.comp = false;
    appComponent.loading = false;
  }

  ngOnInit(): void { }

  onChecked() {
    // this.routingService.btnStatus = !this.routingService.btnStatus;
    this.toggleBtn = !this.toggleBtn;
    let toggle = () => {
      let sf = $('.skills-field'),
        cnt = $('.container'),
        skl_wrp = $('.skills-wrap');

      if (this.toggleBtn) {
        sf.css('text-indent', '-600%');
        cnt.css('display', 'block');
        skl_wrp.css('display', 'none');
        screenSaver();
      }
      else {
        clearTimeout(screenSaver());
        cnt.css('display', 'none');
        sf.css('text-indent', '0%');
        skl_wrp.css('display', 'block');
      }
    }

    let screenSaver = () =>
      $(document).ready(function () {
        let s = 1000;
        let arr = ['Java', 'JDBC', 'Servlets', 'Spring', 'Microservices', 'SQL', 'MYSQL', 'OracleSQL',
          'Angular 8', 'Angular 9', 'Angular 11', 'TypeScript', 'Angular JS', 'HTML5', 'CSS3', 'SASS',
          'Javascript', 'RxJS', 'JQuery', 'Node.js', 'Express.js', 'Jenkins', 'GitHub',
          'GitLab', 'AWS', 'S3', 'GC', 'Wordpress', 'Jasmine', 'Jest', 'JUnit'];
        setTimeout(function () {
          let container: any = document.querySelector('.container');
          container.innerHTML = '';
          arr.map(v => {
            let blocks = document.createElement('div');
            $(blocks).addClass('blk');
            blocks.innerHTML = v;
            container.appendChild(blocks);
          })

          let animeShuffle = () =>
            anime({
              targets: '.blk',
              translateX: () => anime.random(-550, 550),
              translateY: () => anime.random(-115, 115),
              scale: () => anime.random(.5, 3),
              easing: 'linear',
              duration: 9 * s,
              delay: anime.stagger(9),
              complete: animeShuffle
            });
          animeShuffle();
        }, s);
      });

    toggle();
  }

  // toggleSaveStatus = (status: boolean) => {
  //   let toggleStatus = {      
  //     on: true,
  //     off: false
  //   }
  //   return (action: any) => {
  //     switch (action.type) {
  //       case 'on':
  //         const previous = history.past[0]
  //         const newPast = history.past.slice(1)
  //         history = {
  //           past: newPast,
  //           present: previous,
  //           future: [history.present, ...history.future]
  //         }
  //         return previous        
  //       default:
  //         const newPresent = status(state, action)
  //         history = {
  //           past: [history.present, ...history.past],
  //           present: newPresent,
  //           future: [] 
  //         }
  //         return newPresent
  //     }
  //   }
  // }
}
