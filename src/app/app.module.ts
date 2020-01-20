import { ProfileService } from './services/profile/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AlumniRecentComponent } from './alumni-recent/alumni-recent.component';
import { LinksCardComponent } from './links-card/links-card.component';
import { AlumniListComponent } from './alumni-list/alumni-list.component';
import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { ProfileInformationAddComponent } from './profile-information-add/profile-information-add.component';
import { ProfileInformationUpdateComponent } from './profile-information-update/profile-information-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ProfileCardComponent,
    AlumniRecentComponent,
    LinksCardComponent,
    AlumniListComponent,
    AlumniDetailsComponent,
    ProfileInformationComponent,
    ProfileInformationAddComponent,
    ProfileInformationUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
    cookieName: 'csrftoken',
    headerName: 'X-CSRFToken',
  }),
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
