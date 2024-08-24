import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.css'
})
export class MyResumeComponent {

  yearsOfExperience: number = 0;
  startDate: Date = new Date('2017-01-01'); // Start date: 1 Jan 2017

  ngOnInit(): void {
    this.calculateYearsOfExperience();
  }

  calculateYearsOfExperience(): void {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - this.startDate.getTime();
    this.yearsOfExperience = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25)); // Calculate the number of years
  }




  resumeSections = [
    {
      title: 'Doctor of Philosophy (PhD)',
      content: `
        Field: Computer Software and Media Applications
        Institution: GNA University
        Duration: Jul 2021 - Present
      `,
      isExpanded: true
    },
    {
      title: 'Master of Computer Applications (MCA)',
      content: `
        Field: Computer Science
        Institution: Innocent Heart Group of Institutions
        Duration: 2015 - 2017
      `,
      isExpanded: false
    },
    {
      title: 'Bachelor in Computer Application (BCA)',
      content: `
        Field: Computer Science
        Institution: Vinoba Bhave University
        Duration: 2012 - 2015
      `,
      isExpanded: false
    },
    {
      title: 'High School (+12)',
      content: `
        Field: Science
        Institution: B.N.S D.A.V Public School, Giridih
        Duration: 2010 - 2012
      `,
      isExpanded: false
    }
  ];

  professionalSections = [
    {
      title: 'Nagarro',
      content: `
        - Associate Staff Engineer (Mar 2024 - Present, 6 mos) - Remote, Chandigarh, India
          - .NET Core, .NET Framework, and +7 skills
        - Senior Engineer (Apr 2022 - Mar 2024, 2 yrs)
          - .NET Core, JavaScript, and +7 skills
      `,
      isExpanded: true
    },
    {
      title: 'Wipro Limited',
      content: `
        - Associate Consultant (Mar 2021 - Apr 2022, 1 yr 2 mos) - Full-time, Gurugram, Haryana, India
          - Responsible for back-end development, managing existing services with a service-oriented architecture, and applying SOLID principles to write high-quality, scalable, testable, and clean code.
      `,
      isExpanded: false
    },
    {
      title: 'Technossus',
      content: `
        - Senior Software Engineer (Mar 2020 - Apr 2021, 1 yr 2 mos) - Full-time, Mohali, Punjab
          - Test Automation
        - Software Engineer (May 2018 - Mar 2020, 1 yr 11 mos) - Ludhiana, Punjab, India
      `,
      isExpanded: false
    },
    {
      title: 'SAGUNA CONSULTING SERVICES LLC',
      content: `
        - Software Developer (Nov 2017 - Apr 2018, 6 mos) - Ludhiana Area, India
      `,
      isExpanded: false
    },
    {
      title: 'Live Deftsoft Informatics Pvt. Ltd.',
      content: `
        - Software Engineer (Jul 2017 - Oct 2017, 4 mos) - Mohali
        - Jr Software Developer (Jan 2017 - Jun 2017, 6 mos)
      `,
      isExpanded: false
    }
  ];

  myImage = 'assets/Creatives/clipart2.png';

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
