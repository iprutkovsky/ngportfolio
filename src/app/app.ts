import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hexagon } from './common/hexagon/hexagon';
import { SharedData } from './services/shared-data';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    Hexagon
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  hexagonTitle: string[] = [
    'Summary',
    'Experience',
    'Education',
    'Skills',
    'Projects',
    'Contact'
  ];
  themeLevel: SharedData = inject(SharedData);
  themeButtonData: string = 'wb_sunny';

  // constructor(private sharedData: SharedData) {
  // }

  themeToggle(): void {
    switch (this.themeLevel.themeData()) {
      case 'dark':
        this.themeButtonData = 'wb_sunny';
        this.themeLevel.setThemeData('light');
        break;
      case 'light':
        this.themeButtonData = 'dark_mode';
        this.themeLevel.setThemeData('dark');
        break;
    }
  }
}