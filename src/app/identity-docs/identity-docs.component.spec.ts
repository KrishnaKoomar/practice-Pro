import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDocsComponent } from './identity-docs.component';

describe('IdentityDocsComponent', () => {
  let component: IdentityDocsComponent;
  let fixture: ComponentFixture<IdentityDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityDocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentityDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
