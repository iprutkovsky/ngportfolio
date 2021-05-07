import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  constructor(private appComponent: AppComponent) {
    appComponent.comp = false;
    appComponent.loading = false;
  }

  ngOnInit(): void {
  }

}
