import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from 'src/app/models/speaker.model';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-speaker-info',
  templateUrl: './speaker-info.component.html',
  styleUrls: ['./speaker-info.component.scss']
})
export class SpeakerInfoComponent {
  get formData() { return this.editSpeakerForm.controls; }

  speakers: Speaker[] = [];
  speaker: any;
  speakerToBeViewed = '' ;
  editSpeakerForm!: FormGroup;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentservice: ContentService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.speakerToBeViewed = this.route.snapshot.queryParams['speaker'];
    if (!Boolean(this.speakerToBeViewed)) { this.redirectToSpeakersPage(); }

    this.editSpeakerForm = this.formBuilder.group({
      cell: [{value: '', disabled : true}],
      phone: [{value: '', disabled : true}],
      state: [{value: '', disabled : true}],
      country: [{value: '', disabled : true}]
    });

      this.contentservice.$speakerContent.subscribe(
        (data:any) => {
          this.isLoading = true;
          this.speakers = data.results;

          if(data) {
            this.speaker = this.speakers.find(item =>item.email === this.speakerToBeViewed);
            console.log('((((',this.speaker)
            if (!Boolean(this.speaker)) { this.redirectToSpeakersPage(); }
            this.isLoading = false;
            this.patchExistingValues();
          }
        }
      )
  }

  redirectToSpeakersPage() {
    this.router.navigate(['/speakers']);
  }

  patchExistingValues() {
    this.editSpeakerForm.patchValue({
      cell: this.speaker?.cell,
      phone: this.speaker?.phone,
      state: this.speaker?.location?.state,
      country: this.speaker?.location?.country
    });
  }
}
