import { profileApi } from './../urls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  get_profile_card() {
    return this.http.get(profileApi.profile_card);
  }

  get_profile() {
    return this.http.get(profileApi.profile);
  }

  get_profile_social() {
    return this.http.get(profileApi.profile_social);
  }

  get_profile_jobs() {
    return this.http.get(profileApi.profile_jobs);
  }
}
