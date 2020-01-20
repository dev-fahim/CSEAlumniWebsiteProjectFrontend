export const apiHost = 'http://127.0.0.1:8000/api/';
export const profileApiEndpoint = apiHost + 'profile/';
export const alumniApiEndpoint = apiHost + 'profiles-alumni/';

export const profileApi = {
    profile: profileApiEndpoint,
    profile_card: profileApiEndpoint + 'profile-card/',
    profile_jobs: profileApiEndpoint + 'jobs/',
    profile_jobs_create: profileApiEndpoint + 'jobs/create/',
    profile_social: profileApiEndpoint + 'social/',
    profile_social_create: profileApiEndpoint + 'social/create/'
};

export const alumniApi = {
    alumni_all: alumniApiEndpoint
};
