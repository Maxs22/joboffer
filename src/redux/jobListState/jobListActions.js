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

export const sortByPublicationDate = {
    type: 'SORTED_BY_PUBLICACION_DATE'
}

export const sortByLocation = {
    type: 'SORTED_BY_LOCATION'
}

export const jobListLoading = {
    type: 'JOB_LIST_LOADING'
}

export const jobListLoadingError = {
    type: 'JOB_LIST_LOADING_ERROR'
}

export function jobListLoaded (jobs){
    return {
        type: 'JOB_LIST_LOADED',
        payload :jobs
    }
}

export function jobSelected(jobId){
    return {
        type: 'JOB_SELECTED',
        payload: jobId
    }
}