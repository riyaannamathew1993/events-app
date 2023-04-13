import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentService } from 'src/app/services/content/content.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardSpeakersComponent } from './dashboard-speakers.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';

describe('DashboardSpeakersComponent', () => {
  let component: DashboardSpeakersComponent;
  let fixture: ComponentFixture<DashboardSpeakersComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardSpeakersComponent ,
        LoadingSpinnerComponent,
        SearchBarComponent
    ],
      providers:[ContentService],
      imports: [
        HttpClientTestingModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatGridListModule
      ]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(DashboardSpeakersComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading spinner when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const loadingSpinner = debugElement.query(By.css('app-loading-spinner'));
    expect(loadingSpinner).toBeTruthy();
  });

  // it('should show search bar and speakers list when isLoading is false', () => {
  //   component.isLoading = false;
  //   fixture.detectChanges();
  //   const searchBar = debugElement.query(By.css('app-search-bar'));
  //   const speakersList = debugElement.queryAll(By.css('app-speaker-card'));
  //   expect(searchBar).toBeTruthy();
  //   expect(speakersList.length).toBeGreaterThan(0);
  // });
});
