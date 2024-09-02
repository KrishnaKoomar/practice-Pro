import { TestBed } from '@angular/core/testing';
import { ThemeSerService } from './theme-ser.service';

describe('ThemeSerService', () => {
  let service: ThemeSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
