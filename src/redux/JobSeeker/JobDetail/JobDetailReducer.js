const initialState = {
    jobDetailLoading: false,
    jobDetailLoaded: false,
    jobDetailObject: {},
    jobDetailLoadingError: false,
    jobDetailPostulating: false,
    JobDetailPostulationSuccess: false
}

export function JobDetailReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'JOB_DETAIL_LOADING': return {
            ...state,
            jobDetailLoading: true,
            jobDetailLoaded: false,
            jobDetailLoadingError: false
        };
        case 'JOB_DETAIL_LOADING_ERROR': return {
            ...state,
            jobDetailLoading: false,
            jobDetailLoadingError: true,
            jobDetailLoaded: false
        };
        case 'JOB_DETAIL_LOADED': return {
            ...state,
            jobDetailLoading: false,
            jobDetailLoaded: true,
            jobDetailLoadingError: false,
            jobDetailObject: action.payload
        };
        case 'JOB_DETAIL_POSTULATING': return {
            ...state,
            jobDetailPostulating: true
        };
        case 'JOB_DETAIL_POSTULATION_SUCESS': return {
            ...state,
            jobDetailPostulating: false,
            JobDetailPostulationSuccess: true
        };
        case 'JOB_DETAIL_POSTULATING_POSTULATION_ERROR': return {
            ...state,
            jobDetailPostulating: false,
            JobDetailPostulationSuccess: false
        };
        default: return state;
    }
}