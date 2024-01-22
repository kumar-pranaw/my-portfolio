import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent implements OnInit {
  originalTitle = "PRANAV KUMAR";
  randomizedTitle: string = '';
  isAnimationInProgress: boolean = true;

  ngOnInit() {
    this.startRandomTextAnimation();
  }

  startRandomTextAnimation() {
    const interval = setInterval(() => {
      this.randomizedTitle = this.generateRandomText();
    }, 100); // Adjust the interval duration as needed

    setTimeout(() => {
      clearInterval(interval);
      this.isAnimationInProgress = false;
      this.randomizedTitle = this.originalTitle;
    }, 2000); // Stop the animation after 2 seconds
  }

  private generateRandomText(): string {
    let randomText = '';
    const charArray = this.originalTitle.split('');
    while (charArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * charArray.length);
      randomText += charArray.splice(randomIndex, 1)[0];
    }
    return randomText;
  }
}