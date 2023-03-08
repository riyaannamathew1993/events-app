import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  speakerContentUrl = "https://randomuser.me/api/?results=20&page=1";

  $speakerContent = new BehaviorSubject([]);

  constructor(private http: HttpClient) { 
    this.getSpeakerContent();
  }

  fetchContent(url: string) {
    return this.http.get<any>(url);
  }

  getSpeakerContent() {
    this.fetchContent(this.speakerContentUrl).subscribe({
      next: data => {
        this.$speakerContent.next(data);
      },
      error:error => {
        console.error("There was an error",error)
      }
    })
  }
}
