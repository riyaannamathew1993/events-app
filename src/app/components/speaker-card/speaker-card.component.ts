import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from 'src/app/models/speaker.model';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent  {
   @Input() speaker: Speaker | undefined;

   constructor(private router:Router) {}
  
   viewSpeaker(speaker:any) {
    this.router.navigate(['/speaker-info'], { queryParams: { speaker: speaker } });
   }

}

