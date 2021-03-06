export const filterByPositionName = {
    type: 'FILTERED_BY_POSITION_NAME',
    payload: []
}

export const filterBySkills = {
    type: 'FILTERED_BY_SKILLS',
    payload: []
}

export const filterByLocation = {
    type: 'FILTERED_BY_LOCATION',
    payload: []
}

export const filterByTypeOfCompany = {
    type: 'FILTERED_BY_TYPE_OF_COMPANY',
    payload: []
}

export const filterByCompanyName = {
    type: 'FILTERED_BY_COMPANY_NAME',
    payload: []
}

export const filterByState = {
    type: 'FILTERED_BY_JOB_OFFER_STATE',
    payload: []
}

export const sortByPublicationDate = {
    type: 'ORDERING_BY_PUBLICACION_DATE'
}

export const sortByLocation = {
    type: 'ORDERING_BY_LOCATION'
}

export const jobListLoading = {
    type: 'JOB_LIST_LOADING'
}

export const jobListLoadingError = {
    type: 'JOB_LIST_LOADING_ERROR'
}

export const refreshJobList = {
    type: 'REFRESH_JOB_LIST'
}

export function jobListLoaded (jobs){
    return {
        type: 'JOB_LIST_LOADED',
        payload :jobs
    }
}
