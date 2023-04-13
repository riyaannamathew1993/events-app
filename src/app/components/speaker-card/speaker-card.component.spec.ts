import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

import { SpeakerCardComponent } from './speaker-card.component';

describe('SpeakerCardComponent', () => {
  let component: SpeakerCardComponent;
  let fixture: ComponentFixture<SpeakerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerCardComponent ],
      imports: [MatCardModule]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(SpeakerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display the speaker name, email, phone, cell, state, and country', () => {
  //   const cardHeader = fixture.debugElement.query(By.css('mat-card-header')).nativeElement;
  //   expect(cardHeader.textContent).toContain('Mr. John Doe');
  //   expect(cardHeader.textContent).toContain('johndoe@example.com');

  //   const content = fixture.debugElement.query(By.css('.content')).nativeElement;
  //   expect(content.textContent).toContain('Cell');
  //   expect(content.textContent).toContain('555-5678');
  //   expect(content.textContent).toContain('Phone');
  //   expect(content.textContent).toContain('555-1234');
  //   expect(content.textContent).toContain('State');
  //   expect(content.textContent).toContain('CA');
  //   expect(content.textContent).toContain('Country');
  //   expect(content.textContent).toContain('USA');
  // });
});
