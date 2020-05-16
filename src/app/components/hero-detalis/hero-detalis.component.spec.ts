import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetalisComponent } from './hero-detalis.component';

describe('HeroDetalisComponent', () => {
  let component: HeroDetalisComponent;
  let fixture: ComponentFixture<HeroDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
