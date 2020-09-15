const initialState = {
    filterApplied: false,
    jobListOrderingBy: 'Fecha de publicación',
    sortApplied: false,
    filterValue: [],
}

export function RecruiterJobListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ORDERING_BY_PUBLICACION_DATE': return {
            ...state,
            jobListOrderingBy: 'Fecha de publicación'
        };
        case 'ORDERING_BY_LOCATION': return {
            ...state,
            jobListOrderingBy: 'Lugar de trabajo'
        }
        case 'FILTERED_BY_COMPANY_NAME': return {
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
        case 'FILTERED_BY_JOB_OFFER_STATE': return {
            ...state,
            filterApplied: true,
            filterValue: action.payload
        }

        default: return state
    }
}

