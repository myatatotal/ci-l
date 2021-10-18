import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSiteComponent } from './chart-site.component';

describe('ChartSiteComponent', () => {
  let component: ChartSiteComponent;
  let fixture: ComponentFixture<ChartSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
