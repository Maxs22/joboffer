const initialState = {
    filterApplied: false,
    sortApplied: false,
    filterValue: [],
}

export function RecruiterJobListReducer(state = initialState, action) {
    switch (action.type) {
        case 'SORTED_BY_PUBLICACION_DATE': return {
            ...state,
            sortApplied: true
        };
        case 'SORTED_BY_LOCATION': return {
            ...state,
            sortApplied: true
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

