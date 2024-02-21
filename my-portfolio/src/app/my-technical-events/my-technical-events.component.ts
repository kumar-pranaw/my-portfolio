import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-technical-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-technical-events.component.html',
  styleUrl: './my-technical-events.component.css'
})
export class MyTechnicalEventsComponent {
  topWorkshops: any[];
  topSessions: any[];
  topHackathons: any[];

  constructor() {
    this.topWorkshops = this.events.myWorkshops.slice(0, 4);
    this.topSessions = this.events.mySessions.slice(0, 4);
    this.topHackathons = this.events.myHackathons.slice(0, 4);
  }
  events = {
    "myWorkshops": [
      {
        "workshopId": 1,
        "workshopName": "Crafting Your Web Development Career",
        "workshopVenue": "S.V.I.E.T Punjab",
        "workshopStartDate": "13 April 2023",
        "workshopEndDate": "",
        "workshopImage": ['/assets/events/Workshops/SVIET/img1.jpg', '/Assets/events/Workshops/SVIET/img2.jpg'],
        "workshopDescription": "In our one-day workshop, we delved deep into the world of web development. Participants explored both frontend and backend web technologies, discovering how to build interactive and dynamic websites. We discussed how to get started with frontend and backend, providing essential insights to kickstart your journey into web development. This workshop was the perfect entry point for those looking to begin their web development adventure.",
        "workshopTechStack": [
          ".net",
          "html",
          "css",
          "javascript",
          "typescript",
          "angular",
          "firebase"
        ]
      },
      {
        "workshopId": 2,
        "workshopName": "Two-Day Web Development Workshop",
        "workshopVenue": "Chitkara University Punjab",
        "workshopStartDate": "30th October 2023",
        "workshopEndDate": "31st October 2023",
        "workshopImage": ['/assets/events/Workshops/ChitkaraWorkshops/img1.JPG'],
        "workshopDescription": "Two-Day Web Development Workshop was a remarkable event designed to equip participants with the skills to create web applications from scratch. This intensive workshop covered a wide range of topics, taking participants on a journey from the basics of HTML and CSS to the intricacies of frontend and backend development using .NET. with the handson and some live experiments and projects",
        "workshopTechStack": [
          ".net",
          "html",
          "css",
          "javascript",
          "typescript",
          "angular"
        ]
      }
    ],
    "mySessions": [
      {
        "sessionId": 1,
        "sessionName": "Getting Started With Firebase",
        "sessionDescription": "The session was an exploration of the fundamental topics in Firebase, including Firebase Hosting, Analytics, and Realtime Database. Hosted at CGC Jhanjeri as part of the GDG TechShow event organized by GDG Chandigarh on 18th February 2023, this interactive session provided valuable insights into Firebase's capabilities. Participants also had a hands-on experience, allowing them to apply their knowledge and delve into the practical aspects of Firebase.",
        "sessionVenue": "CGC Jhanjeri",
        "eventName": "GDG TechShow",
        "sessionImage": ['/assets/events/Sessions/AngularSessionCGC/img1.jpg', '/Assets/events/Sessions/AngularSessionCGC/img2.jpg'],
        "organizedBy": "Google Developer Groups Chandigarh",
        "eventDate": "18th February 2023"
      },
      {
        "sessionId": 2,
        "sessionName": "Introduction to Flutter",
        "sessionDescription": "The session served as a comprehensive introduction to Flutter, the cross-platform app development framework. Presented at Gulzar Groups Of Institutions during the International Youth Summit 2023 Flutter Forward event organized by GDG Ludhiana on 31st March 2023, this session covered the fundamental concepts and versatile applications of Flutter in modern app development. Participants also had the opportunity for hands-on experience to apply what they learned during the session.",
        "sessionVenue": "Gulzar Groups Of Institutions",
        "eventName": "International Youth Summit 2023 Flutter Forward",
        "sessionImage": ['/assets/events/Sessions/INTERNATIONALYOUTHSUMMITFLUTTER/img1.jpg', '/Assets/events/Sessions/INTERNATIONALYOUTHSUMMITFLUTTER/img2.jpg'],
        "organizedBy": "Google Developer Groups Ludhiana",
        "eventDate": "31st March 2023"
      },
      {
        "sessionId": 3,
        "sessionName": "Getting Started With Typescript and Angular",
        "sessionDescription": "The session provided a comprehensive introduction to Angular and TypeScript, an essential web development framework. Presented as a Guest Speaker at CGC Jhanjeri, this session delved into the fundamental concepts and versatile applications of Angular and TypeScript in modern web development. Participants also enjoyed a hands-on experience, allowing them to apply their newfound knowledge during the session.",
        "sessionVenue": "CGC Jhanjeri, Punjab",
        "eventName": "Orientation Program",
        "sessionImage": ['/assets/events/Sessions/AngularSessionCGC/img1.jpg', '/Assets/events/Sessions/AngularSessionCGC/img2.jpg'],
        "organizedBy": "CGC Jhanjeri",
        "eventDate": "24th April 2023"
      },
      {
        "sessionId": 4,
        "sessionName": "Keeping Up with the Latest Trends in Web Development and Angular",
        "sessionDescription": "This session demonstrates over new features that became stable on the Web Platform this year, and demonstrate new standard ways to author web applications without cumbersome hacks or extra libraries and polyfills. Also this session covers latest topics introduced in latest version of angular",
        "sessionVenue": "S.V.I.E.T Punjab",
        "eventName": "Google IO Extended Chandigarh",
        "sessionImage": ['/assets/events/Sessions/GOOGLEIOGDGCHANDIGARHSVIET/img1.jpeg', '/Assets/events/Sessions/GOOGLEIOGDGCHANDIGARHSVIET/img2.jpg'],
        "organizedBy": "Google Developer Groups Chandigarh",
        "eventDate": "27th May 2023"
      },
      {
        "sessionId": 5,
        "sessionName": "Deep dive into web",
        "sessionDescription": "This session demonstrates the latest updates in web development and web UI trends. I dive into the world of web technology, unveiling the most recent advancements that are shaping the digital landscape. Additionally, we explored the latest updates and exciting new features in Angular, provided with invaluable insights to stay at the forefront of web development",
        "sessionVenue": "Shri Mata Vaishno Devi University, Katra, Jammu",
        "eventName": "Google IO Extended Jammu",
        "sessionImage": ['/assets/events/Sessions/GOOGLEIOGDGJAMMU/img1.jpg', '/Assets/events/Sessions/GOOGLEIOGDGJAMMU/img3.jpeg'],
        "organizedBy": "Google Developer Groups Jammu",
        "eventDate": "20th August 2023"
      }
    ],
    "myHackathons": [
      {
        "hackathonId": 1,
        "hackathonName": "Smart Hackathon",
        "hackathonStartDate": "11th Feb 2023",
        "hackathonEndDate": "12th Feb 2023",
        "hackathonDetails": "Organized by the tech community at Shaheed Bhagat Singh State University, Ferozepur, this hackathon was a dynamic gathering of developers from various universities. The event featured diverse domains of innovation and coding expertise. As a mentor, I had the privilege of reviewing all participants' projects, and I was truly impressed by the creativity and skill displayed. It was a fantastic experience, witnessing such a high level of innovation and collaboration.",
        "hackathonRole": "Mentor",
        "hackathonVenue": "Shaheed Bhagat Singh State University, Ferozepur",
        "hackathonImage": ['/assets/events/Hackathons/SBBSHackathon/img1.jpg', '/Assets/events/Hackathons/SBBSHackathon/img2.jpg'],
        "hackathonTheme": [
          "Heritage & cultural",
          "Open Innovation",
          "Agriculture",
          "Transportation",
          "Environment & Sustainable Development Goal",
          "Smart City and Infrastructure",
          "Accessibility and Disability",
          "Healthcare",
          "Women Safety"
        ]
      },
      {
        "hackathonId": 2,
        "hackathonName": "CGC TechFest Utsav 2023",
        "hackathonStartDate": "10th April 2023",
        "hackathonEndDate": "",
        "hackathonDetails": "Organized by the tech community at CGC Jhanjeri, this hackathon was a dynamic gathering of developers from various universities. The event featured diverse domains of innovation and coding expertise. As a Judge, I had the privilege of reviewing all participants' projects, and I was truly impressed by the creativity and skill displayed. It was a fantastic experience, witnessing such a high level of innovation and collaboration.",
        "hackathonRole": "Judge",
        "hackathonVenue": "CGC Jhanjeri",
        "hackathonImage": ['/assets/events/Hackathons/CGCUtsavhackathon/img1.jpg', '/Assets/events/Hackathons/CGCUtsavhackathon/img2.jpg'],
        "hackathonTheme": [
          "Open Innovation"
        ]
      },
      {
        "hackathonId": 3,
        "hackathonName": "InnoSprint Hackathon",
        "hackathonStartDate": "7th October 2023",
        "hackathonEndDate": "8th October 2023",
        "hackathonDetails": "I had the privilege of serving as a mentor at the CGC Jhanjeri Hackathon, organized by the passionate team at D4 Community. This exhilarating event brought together undergraduate students, providing them with a platform to harness their coding skills, creativity, and teamwork to tackle real-world challenges. It was a thrilling 24 hours of non-stop coding, brainstorming, and networking, with fantastic prizes awaiting the top innovators. Being a part of this inspiring community and witnessing the participants' dedication to problem-solving was a truly enriching experience.",
        "hackathonRole": "Mentor",
        "hackathonVenue": "CGC Jhanjeri",
        "hackathonImage": ['../assets/events/Hackathons/InnoSprint/img1.jpg', '/Assets/events/Hackathons/InnoSprint/img2.jpg'],
        "hackathonTheme": [
          "HealthTech Innovation",
          "EdTech Revolution",
          "Smart Cities and IoT",
          "E-Commerce Enhancement",
          "Open Innovation"
        ]
      }
    ]
  }

}

