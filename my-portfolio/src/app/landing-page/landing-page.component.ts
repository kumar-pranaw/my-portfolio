import { Component } from '@angular/core';
import { CommunitiesComponent } from './communities/communities.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommunitiesComponent, ArticlesComponent, EventsComponent, MainHeaderComponent, MyResumeComponent, MySkillsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
