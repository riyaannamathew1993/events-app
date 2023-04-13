import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [MatToolbarModule]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct toolbar color', () => {
    const matToolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(matToolbar.nativeElement.getAttribute('color')).toEqual('primary');
  });

  it('should display the correct title', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(title).toContain('Speakers');
  });
});
