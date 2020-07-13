const initialState = {
    viewingJobOfferId: '',
    editingJobOfferId: '',
    closingJobOfferId: '',
    jobOfferSuccessfullyClosed: false,
    publishingJobOfferId: '',
    jobOfferSuccessfullyPublished: false,
    deletingJobOfferId: false,
    jobOfferSuccessfullyDeleted: false,
    loadingJobOffers: false,
    jobOffersSuccessfullyLoaded: false,
    jobList: [],
    skills: []
}

export function RecruiterCommonReducer(state = initialState, action) {

    switch (action.type) {

        case 'VIEWING_JOB_OFFER_DETAILS': return {
            ...state,
            viewingJobOfferId: action.payload,
            editingJobOfferId: ''
        };
        case 'EDITING_JOB_OFFER': return {
            ...state,
            viewingJobOfferId: '',
            editingJobOfferId: action.payload
        };
        case 'CLOSING_JOB_OFFER': return {
            ...state,
            closingJobOfferId: action.payload
        };
        case 'JOB_OFFER_SUCCESSFULLY_CLOSED': return {
            ...state,
            closingJobOfferId: '',
            editingJobOfferId: '',
            jobOfferSuccessfullyClosed: true
        };
        case 'FAILURE_CLOSING_JOB_OFFER': return {
            ...state,
            jobOfferSuccessfullyClosed: false
        };
        case 'PUBLISHING_JOB_OFFER': return {
            ...state,
            publishingJobOfferId: action.payload
        };
        case 'JOB_OFFER_SUCCESSFULLY_PUBLISHED': return {
            ...state,
            publishingJobOfferId: '',
            editingJobOfferId: '',
            jobOfferSuccessfullyPublished: true
        };
        case 'FAILURE_PUBLISHING_JOB_OFFER': return {
            ...state,
            jobOfferSuccessfullyPublished: false
        };
        case 'DELETING_JOB_OFFER': return {
            ...state,
            deletingJobOfferId: action.payload
        };
        case 'JOB_OFFER_SUCCESSFULLY_DELETED': return {
            ...state,
            deletingJobOfferId: '',
            editingJobOfferId: '',
            jobOfferSuccessfullyDeleted: true
        };
        case 'FAILURE_DELETING_JOB_OFFER': return {
            ...state,
            jobOfferSuccessfullyDeleted: false
        };
        case 'LOADING_JOB_OFFERS': return {
            ...state,
            loadingJobOffers: true
        };
        case 'JOB_OFFERS_SUCCESSFULLY_LOADED': return {
            ...state,
            jobOffersSuccessfullyLoaded: true,
            loadingJobOffers: false,
            jobList: action.payload
        };
        case 'FAILURE_LOADING_JOB_OFFERS': return {
            ...state,
            jobOffersSuccessfullyLoaded: false,
            loadingJobOffers: false,
            jobList: []
        };
        case 'REMOVE_JOBS_LOADED': return {
            ...state,
            jobList: []
        }
        case 'SKILLS_LOADED': return{
            ...state,
            skills: action.payload

        }

        default: return state
    }
}

