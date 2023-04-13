import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ContentService],
    });
    service = TestBed.inject(ContentService);
    //httpMock = TestBed.inject(HttpTestingController);
  });

  // afterEach(() => {
  //   httpMock.verify();
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //it('should get speaker content', () => {
  //   const mockData = {
  //       "gender": "female",
  //       "name": {
  //         "title": "Miss",
  //         "first": "Charlotte",
  //         "last": "Soto"
  //       },
  //       "location": {
  //         "street": {
  //           "number": 9718,
  //           "name": "Park Lane"
  //         },
  //         "city": "Kildare",
  //         "state": "Leitrim",
  //         "country": "Ireland",
  //         "postcode": 59078,
  //         "coordinates": {
  //           "latitude": "-0.2804",
  //           "longitude": "9.0568"
  //         },
          
  //       },
  //       "email": "charlotte.soto@example.com",
  //       "phone": "031-243-2803",
  //       "cell": "081-988-6595",
  //       "id": {
  //         "name": "PPS",
  //         "value": "3613397T"
  //       },
  //       "picture": {
  //         "large": "https://randomuser.me/api/portraits/women/16.jpg",
  //         "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
  //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
  //       },
  //       "nat": "IE",
  //  };
    // service.getSpeakerContent();
    // const req = httpMock.expectOne(service.speakerContentUrl);
    // expect(req.request.method).toBe('GET');
    //req.flush(mockData);
    //expect(service.$speakerContent.getValue()).toEqual(mockData);
  //});

  // it('should handle error when getting speaker content', () => {
  //   spyOn(console, 'error');
  //   service.getSpeakerContent();
  //   const req = httpMock.expectOne(service.speakerContentUrl);
  //   expect(req.request.method).toBe('GET');
  //   req.error(new ErrorEvent('network error'));
  //   expect(console.error).toHaveBeenCalledWith('There was an error', new ErrorEvent('network error'));
  // });
});
