import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {


  socialMedia = [
    { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:your-email@example.com' }
  ];
}
