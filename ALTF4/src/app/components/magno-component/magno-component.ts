import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-magno-component',
  imports: [MatButtonModule],
  templateUrl: './magno-component.html',
  styleUrl: './magno-component.scss',
})
export class MagnoComponent {
  name = 'Bianca Lauryn H. Magno';
  photo = `images/magno.jpg`;
  description = signal('');

  showDescription() {
    this.description.set(
      'I am an IT student who enjoys UI and UX designs. Im still learning more about this course'
    );
  }
}