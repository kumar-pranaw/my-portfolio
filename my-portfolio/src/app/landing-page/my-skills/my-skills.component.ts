import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})
export class MySkillsComponent {
  skills = [
    {
      name: 'Angular',
      logo: '../../../assets/Brand/skillLogos/Angular.png',
      description: 'As part of my skills, I specialize in using Angular to create responsive and dynamic web applications. I have experience in building modular and scalable front-end solutions using Angular\'s powerful features and components.'
    },
    {
      name: 'Azure',
      logo: '../../../assets/Brand/skillLogos/Azure.png',
      description: 'I specialize in utilizing Microsoft Azure to design and implement scalable and reliable cloud solutions. I have hands-on experience with various Azure services for building, deploying, and managing applications in the cloud.'
    },
    {
      name: 'C#',
      logo: '../../../assets/Brand/skillLogos/CSharp.png',
      description: 'I am proficient in C# programming language, using it to develop scalable and maintainable applications. I have experience in building both desktop and web applications with C#.'
    },
    {
      name: '.NET',
      logo: '../../../assets/Brand/skillLogos/Dotnet.png',
      description: 'I specialize in using the .NET platform to create versatile and scalable applications. I have hands-on experience with both .NET Framework and .NET Core, enabling me to build robust solutions for various platforms.'
    }
    // Add more skills as needed
  ];
  isRotated: boolean = false;

  rotateCard(): void {
    this.isRotated = !this.isRotated;
  }
}
