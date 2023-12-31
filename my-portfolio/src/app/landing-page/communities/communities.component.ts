import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.css'
})
export class CommunitiesComponent {
  communities = [
    {
      "communityId": "3",
      "communityName": "MUG-APAC-Punjab",
      "communityDescription": "MongoDB user groups bring people together to learn from and connect with each other. These gatherings create a community of support, collaboration, and education for all who attend, whether they are students or seasoned professionals.",
      "communityCity": "Punjab, India",
      "communityRole": "Leader/Organizer",
      "startedFrom": "12th October 2023",
      "communityLink": "https://www.mongodb.com/community/user-groups/punjab/",
      "communityLogo": "/assets/Brand/Communities/MUG.png",
      "communityImage": ""
    },
    {
      "communityId": "2",
      "communityName": "Kotlin User Group Chandigarh",
      "communityDescription": "Chandigarh Kotlin User Group is a group of enthusiastic Kotlin developers who love Kotlin. This is the platform for all Kotlin lovers to share and learn their Kotlin experience.",
      "communityCity": "Chandigarh",
      "communityRole": "Organizer",
      "startedFrom": "19th June 2023",
      "communityLink": "https://www.meetup.com/kotlin-chandigarh-user-group/",
      "communityLogo": "/assets/Brand/Communities/KUGC.png",
      "communityImage": ""
    },

    {
      "communityId": "4",
      "communityName": "TensorFlow User Group Chandigarh",
      "communityDescription": "Tensorflow user group based in Chandigarh, joining people from tech-communities as well as AI enthusiasts with leading professionals, researchers, users, and writers in and around Chandigarh.",
      "communityCity": "Chandigarh",
      "communityRole": "Co-Organizer",
      "startedFrom": "4th September 2023",
      "communityLink": "https://www.meetup.com/tensorflow-user-group-chandigarh/",
      "communityLogo": "/assets/Brand/Communities/TFUGC.png",
      "communityImage": ""
    }
  ]
}
