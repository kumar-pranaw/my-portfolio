import { Routes } from '@angular/router';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyTechnicalEventsComponent } from './my-technical-events/my-technical-events.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'events', component: MyTechnicalEventsComponent },
    { path: 'projects', component: MyProjectsComponent },
    { path: 'articles', component: MyArticlesComponent },
    {path:'contact', component:ContactsComponent}
];
