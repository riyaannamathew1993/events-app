import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();

  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set search query on keyup', () => {
    const input = fixture.debugElement.query(By.css('.search-field')).nativeElement;
    input.value = 'search query';
    input.dispatchEvent(new Event('keyup'));

    expect(component.searchQuery).toEqual('search query');
  });

  it('should call Search() function on button click', () => {
    spyOn(component, 'Search');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.Search).toHaveBeenCalled();
  });
});
