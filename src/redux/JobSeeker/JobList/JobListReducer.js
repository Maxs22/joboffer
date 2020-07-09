const initialState = {
    filterApplied: false,
    sortApplied: false,
    filterValue: [],
    jobListLoading: false,
    jobListLoaded: false,
    jobListObjects: [],
    jobListLoadingError: false,
    jobdIdSelected: ''
}

export function JobListReducer(state = initialState, action) {
    switch (action.type) {
        case 'SORTED_BY_PUBLICACION_DATE': return {
            ...state,
            sortApplied: true
        };
        case 'SORTED_BY_LOCATION': return {
            ...state,
            sortApplied: true
        }
        case 'FILTERED_BY_TYPE_OF_COMPANY': return {
            ...state,
            filterApplied: true,
            filterValue: action.payload
        }
        case 'FILTERED_BY_LOCATION': return {
            ...state,
            filterApplied: true,
            filterValue: action.payload
        }
        case 'FILTERED_BY_SKILLS': return {
            ...state,
            filterApplied: true,
            filterValue: action.payload
        }
        case 'FILTERED_BY_POSITION_NAME': return {
            ...state,
            filterApplied: true,
            filterValue: action.payload
        }

        case 'JOB_LIST_LOADING': return {
            ...state,
            jobListLoading: true
        }

        case 'JOB_LIST_LOADED': return {
            ...state,
            jobListLoading: false,
            jobListLoaded: true,
            jobListObjects: action.payload,
            jobListLoadingError: false
        }

        case 'JOB_LIST_LOADING_ERROR': return {
            ...state,
            jobListLoading: false,
            jobListLoaded: false,
            jobListObjects: [],
            jobListLoadingError: true
        }

        case 'JOB_SELECTED': return {
            ...state,
            jobdIdSelected: action.payload
        }

        default: return state
    }
}

