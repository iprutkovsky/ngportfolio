import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';
  comp: boolean = true;
  loading: boolean = true;
  counter: string = '0%';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    let count = 0;
    setInterval(() => {
      if (count == 100) {
        $('.loader').css('opacity', '0');
        this.loading = false;
        clearInterval();
      } else {
        this.counter = `${++count}%`;
        $('.loader').css('opacity', `${1.2 - count / 100}`);
        $('.slogan').css('opacity', `${count / 100 - .1}`);
      }
    }, 50);
  }

}