import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationAddComponent } from './profile-information-add.component';

describe('ProfileInformationAddComponent', () => {
  let component: ProfileInformationAddComponent;
  let fixture: ComponentFixture<ProfileInformationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInformationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInformationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
