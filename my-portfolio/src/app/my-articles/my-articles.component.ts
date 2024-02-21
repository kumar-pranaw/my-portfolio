import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-articles.component.html',
  styleUrl: './my-articles.component.css'
})
export class MyArticlesComponent {
  rssFeedItems: any[] = [];
  responseData: any; // Declare a variable to store the response

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const rssFeedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kumarpranaw';
    this.httpClient.get(rssFeedUrl)
    .subscribe((data: any) => {
      // Assign the entire response to the responseData variable
      this.responseData = data;

      // Extract the items from the response
      this.rssFeedItems = data.items;
      console.log(this.rssFeedItems)
    }, error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }
}
