import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.css'
})
export class MyResumeComponent {
  resumeSections = [
    { title: 'Education', content: 'Your education content goes here.', isExpanded: false },
    { title: 'Hobbies', content: 'Your hobbies content goes here.', isExpanded: false },
    { title: 'Achievements', content: 'Your achievements content goes here.', isExpanded: false }
  ];
    professionalSections = [
    { title: 'Education', content: 'Your education content goes here.', isExpanded: false },
    { title: 'Hobbies', content: 'Your hobbies content goes here.', isExpanded: false },
    { title: 'Achievements', content: 'Your achievements content goes here.', isExpanded: false }
  ]
  myImage = 'assets/Creatives/webimage.png'
  toggleCard(index: number): void {
    this.resumeSections[index].isExpanded = !this.resumeSections[index].isExpanded;
  }
}
