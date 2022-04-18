import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipPage } from './sponsorship.page';

describe('SponsorshipPage', () => {
  let component: SponsorshipPage;
  let fixture: ComponentFixture<SponsorshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorshipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
