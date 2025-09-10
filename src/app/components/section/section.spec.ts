import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section } from './section';

describe('Section', () => {
  let component: Section;
  let fixture: ComponentFixture<Section>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
