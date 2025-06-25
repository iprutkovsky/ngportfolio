import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedData {

  themeData = signal<string>('light');

  constructor() { }

  setThemeData(data: string): void {
    this.themeData.set(data);
  }

  updateThemeData(): void {
    this.themeData.update(value => value == 'light' ? 'dark' : 'light');
  }
}