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
    { title: 'Education', content: 'Your education content goes here.', isExpanded: true }, // Open by default
    { title: 'Hobbies', content: 'Your hobbies content goes here.', isExpanded: false },
    { title: 'Achievements', content: 'Your achievements content goes here.', isExpanded: false }
  ];

  professionalSections = [
    { title: 'Education', content: 'Your education content goes here.', isExpanded: true }, // Open by default
    { title: 'Hobbies', content: 'Your hobbies content goes here.', isExpanded: false },
    { title: 'Achievements', content: 'Your achievements content goes here.', isExpanded: false }
  ];

  myImage = 'assets/Creatives/webimage.png';

  toggleCard(index: number, sectionType: string): void {
    if (sectionType === 'resume') {
      this.resumeSections.forEach((section, i) => {
        section.isExpanded = i === index ? !section.isExpanded : false;
      });
    } else if (sectionType === 'professional') {
      this.professionalSections.forEach((section, j) => {
        section.isExpanded = j === index ? !section.isExpanded : false;
      });
    }
  }
}
