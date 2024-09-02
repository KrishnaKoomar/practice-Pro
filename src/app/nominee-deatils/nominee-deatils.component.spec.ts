import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeDeatilsComponent } from './nominee-deatils.component';

describe('NomineeDeatilsComponent', () => {
  let component: NomineeDeatilsComponent;
  let fixture: ComponentFixture<NomineeDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomineeDeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomineeDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
