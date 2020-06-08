
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
