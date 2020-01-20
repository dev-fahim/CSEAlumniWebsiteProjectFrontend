import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationUpdateComponent } from './profile-information-update.component';

describe('ProfileInformationUpdateComponent', () => {
  let component: ProfileInformationUpdateComponent;
  let fixture: ComponentFixture<ProfileInformationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInformationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInformationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
