import { ProfileService } from './services/profile/profile.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CSEAlumniWebSiteProject';
  constructor(private profileService: ProfileService) {
    this.profileService.get_profile_card()
      .subscribe((response) => {
        console.log(response);
      });
  }
}
