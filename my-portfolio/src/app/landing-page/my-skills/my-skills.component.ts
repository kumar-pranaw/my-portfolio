import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})
export class MySkillsComponent {
  isRotated: boolean = false;

  rotateCard(): void {
    this.isRotated = !this.isRotated;
  }
}
