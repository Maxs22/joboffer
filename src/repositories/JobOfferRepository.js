import getData from '../repositories/common/getData'

export async function getJobOffersCreatedByRecruiter(token, onFailureAction){
    return await getData('/recruiter/getjoboffers', onFailureAction , token );
}

export async function getJobOffers(token, onFailureAction){
    return  await getData('/joboffers', ()=> onFailureAction);
}