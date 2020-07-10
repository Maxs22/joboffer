export function viewingJobOfferDetails(jobOfferId) {
    return {
        type: 'VIEWING_JOB_OFFER_DETAILS',
        payload: jobOfferId
    }
}

export function editingJobOffer(jobOfferId) {
    return {
        type: 'EDITING_JOB_OFFER',
        payload: jobOfferId
    }
}

////
export function closingJobOffer(jobOfferId) {
    return {
        type: 'CLOSING_JOB_OFFER',
        payload: jobOfferId
    }
}

export const jobOfferSuccessfullyClosed = {
    type: 'JOB_OFFER_SUCCESSFULLY_CLOSED'
}

export const failureClosingJobOffer = {
    type: 'FAILURE_CLOSING_JOB_OFFER'
}

/////
export function publishingJobOffer(jobOfferId) {
    return {
        type: 'PUBLISHING_JOB_OFFER',
        payload: jobOfferId
    }
}

export const jobOfferSuccessfullyPublished = {
    type: 'JOB_OFFER_SUCCESSFULLY_PUBLISHED'
}

export const failurePublishingJobOffer = {
    type: 'FAILURE_PUBLISHING_JOB_OFFER'
}

/////
export function deletingJobOffer(jobOfferId) {
    return {
        type: 'DELETING_JOB_OFFER',
        payload: jobOfferId
    }
}

export const jobOfferSuccessfullyDeleted = {
    type: 'JOB_OFFER_SUCCESSFULLY_DELETED'
}

export const failureDeletingJobOffer = {
    type: 'FAILURE_DELETING_JOB_OFFER'
}

/////
export const loadingJobOffers = {
    type: 'LOADING_JOB_OFFERS'
}

export function jobOffersSuccessfullyLoaded(jobs) {
    return {
        type: 'JOB_OFFERS_SUCCESSFULLY_LOADED',
        payload: jobs
    }
}

export const failureLoadingJobOffer = {
    type: 'FAILURE_LOADING_JOB_OFFERS'
}

export const removeJobsLoaded = {
    type: 'REMOVE_JOBS_LOADED',
}