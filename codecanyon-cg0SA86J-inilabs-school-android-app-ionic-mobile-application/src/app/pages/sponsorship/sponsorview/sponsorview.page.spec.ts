import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorviewPage } from './sponsorview.page';

describe('SponsorviewPage', () => {
  let component: SponsorviewPage;
  let fixture: ComponentFixture<SponsorviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
