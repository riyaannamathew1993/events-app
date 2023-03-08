import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpeakersComponent } from './dashboard-speakers.component';

describe('DashboardSpeakersComponent', () => {
  let component: DashboardSpeakersComponent;
  let fixture: ComponentFixture<DashboardSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
