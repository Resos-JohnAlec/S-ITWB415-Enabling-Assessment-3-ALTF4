import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resos-component',
  imports: [MatButtonModule],
  templateUrl: './resos-component.html',
  styleUrl: './resos-component.scss',
})
export class ResosComponent {
  name = 'John Alec L. Resos';
  photo = `images/resos.jpg`;
  description = signal('');

showDescription() {
  this.description.set(
    'I am an IT student trying to learn more about web development.'
  );
}}

