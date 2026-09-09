import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-revillas-component',
  imports: [MatButtonModule],
  templateUrl: './revillas-component.html',
  styleUrl: './revillas-component.scss',
})
export class RevillasComponent {
  name = 'Eunice Grace O. Revillas';
  photo = `images/revillas.jpg`;
  description = signal('');

showDescription() {
  this.description.set(
    'I’m an IT student continuously learning web development. Even if progress takes time, I give my best effort.'
  );
}}