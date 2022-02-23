import * as ajaxCallCreators from './ajaxCallCreators';

export default class JobApi {
    static getJobs() {
        return ajaxCallCreators.get('/jobs')
            .then(result => result)
            .catch(err => err);
    }

    static createJobApplications(form) {
        return ajaxCallCreators.post('/job_applications', form)
           .then(result => result)
           .catch(err => err);
    }
    
}