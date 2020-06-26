
export const jobDetailLoadingError = {
    type: 'JOB_DETAIL_LOADING_ERROR'
}

export const jobDetailLoading = {
    type: 'JOB_DETAIL_LOADING'
}

export function jobDetailLoaded (job){
    return {
        type: 'JOB_DETAIL_LOADED',
        payload :job
    }
}

export const jobDetailPostulating = {
    type: 'JOB_DETAIL_POSTULATING'
}

export const jobDetailPostulationSuccess = {
    type: 'JOB_DETAIL_POSTULATION_SUCESS'
}

export const jobDetailPostulationError = {
    type: 'JOB_DETAIL_POSTULATING_POSTULATION_ERROR'
}