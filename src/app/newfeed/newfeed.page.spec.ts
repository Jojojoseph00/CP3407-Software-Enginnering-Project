import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfeedPage } from './newfeed.page';

describe('NewfeedPage', () => {
  let component: NewfeedPage;
  let fixture: ComponentFixture<NewfeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
