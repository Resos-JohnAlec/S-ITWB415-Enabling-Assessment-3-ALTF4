import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResosComponent } from './resos-component/resos-component';
import { RevillasComponent } from './revillas-component/revillas-component';
import { LauronComponent } from './lauron-component/lauron-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResosComponent, RevillasComponent, LauronComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ALTF4');
}
