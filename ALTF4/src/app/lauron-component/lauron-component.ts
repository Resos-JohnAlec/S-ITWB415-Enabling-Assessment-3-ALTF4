import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lauron-component',
  imports: [MatButtonModule],
  templateUrl: './lauron-component.html',
  styleUrl: './lauron-component.scss',
})
export class LauronComponent {
  name = 'Patrick James S. Lauron';
  photo = `images/lauron.jpg`;
  description = signal('');

showDescription() {
  this.description.set(
    'I’m an IT student passionate about building things for the web. I may not know everything yet, but I show up ready to learn.'
  );
}}