import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Speaker } from 'src/app/models/speaker.model';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-dashboard-speakers',
  templateUrl: './dashboard-speakers.component.html',
  styleUrls: ['./dashboard-speakers.component.scss']
})
export class DashboardSpeakersComponent implements OnInit {
  isLoading = false;
  speakers: Speaker[] = [];
  numberOfSpeakersFeatured = 0;
  numberOfPages = 0;
  numberOfSpeakersPerPage = 6;
  firstIndex = 0;
  lastIndex = this.numberOfSpeakersPerPage;
  searchedSpeakers: Speaker[] = [];
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;


  constructor(private contentService:ContentService) {}

  ngOnInit() {
    this.contentService.$speakerContent.subscribe(
      (data:any) => {
        this.isLoading = true;
        this.speakers = data.results;
        this.searchedSpeakers = data.results;
        console.log('****',typeof(this.speakers))
        this.numberOfSpeakersFeatured = this.speakers?.length;
        console.log('Length',this.numberOfSpeakersFeatured)
        if(this.speakers.length) {
          this.isLoading = false;
        }
      }
    )
  }

  updateGrid(pageEvent: { pageIndex: number; pageSize: number; }) {
    this.firstIndex = pageEvent.pageIndex * pageEvent.pageSize;
    this.lastIndex = this.firstIndex + pageEvent.pageSize;
  }

  searchSpeakers(searchQuery: any) {
    if (Boolean(searchQuery) && typeof (searchQuery) === 'string') {
      this.isLoading = true;
      this.searchedSpeakers = this.speakers.filter((speaker) => {
        const upperCaseSearchQuery = searchQuery.toUpperCase();
        const speakerFName = speaker.name.first.toUpperCase();
        const speakerLName = speaker.name.last.toUpperCase();
        const speakerCountry = speaker.location.country.toUpperCase();
        if (speakerFName.includes(upperCaseSearchQuery) ||
        speakerLName.includes(upperCaseSearchQuery) ||
        speakerCountry.includes(upperCaseSearchQuery)) {
          return true;
        }
        return false;
      });
    } else {
      this.searchedSpeakers = this.speakers;
    }
    this.isLoading = false;
    this.paginator.firstPage();
  }

}
