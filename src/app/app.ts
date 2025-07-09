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

  themeToggle(): void {
    const theme = this.themeLevel.themeData();
    this.themeButtonData = theme == 'dark' ? 'wb_sunny' : 'dark_mode';
    this.themeLevel.setThemeData(theme == 'dark' ? 'light' : 'dark');
  }
}