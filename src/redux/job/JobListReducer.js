const initialState = {
    filterApplied: false,
    jobListOrderingBy: 'Fecha de publicación',
    filterValue: [],
    jobListLoading: false,
    jobListLoaded: false,
    jobListObjects: [],
    jobListLoadingError: false,
    jobdIdSelected: '',
    editingJobOfferId: ''
}

export function JobListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ORDERING_BY_PUBLICACION_DATE': return {
            ...state,
            jobListOrderingBy: 'Fecha de publicación'
        };
        case 'ORDERING_BY_LOCATION': return {
            ...state,
            jobListOrderingBy: 'Lugar de trabajo'
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

        case 'EDITING_JOB_OFFER': return {
            ...state,
            editingJobOfferId: action.payload
        };

        default: return state
    }
}
