const initialState = {
    jobDetailLoading: false,
    jobDetailLoaded: false,
    jobDetailObject: {},
    jobDetailLoadingError: false
}

export function jobDetailReducer(state = initialState, action) {
    
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
        default: return state;
    }
}