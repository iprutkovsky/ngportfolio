import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
declare var $: any;
declare const anime: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  toggleBtn: any;

  constructor(private appComponent: AppComponent) {
    appComponent.comp = false;
  }

  ngOnInit(): void { }

  onChecked() {
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
          'Angular 8', 'Angular 9', 'Angular 11', 'TypeScript', 'Angular JS', 'HTML5', 'CSS3',
          'Javascript', 'RxJS', 'JQuery', 'Node.js', 'Express.js', 'Jenkins', 'GitHub',
          'GitLab', 'AWS', 'S3', 'GC', 'Wordpress'];
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
}
