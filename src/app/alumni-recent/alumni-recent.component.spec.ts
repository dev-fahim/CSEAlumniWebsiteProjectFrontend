import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniRecentComponent } from './alumni-recent.component';

describe('AlumniRecentComponent', () => {
  let component: AlumniRecentComponent;
  let fixture: ComponentFixture<AlumniRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
