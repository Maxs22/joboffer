import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingJobOffers, failureLoadingJobOffer, jobOffersSuccessfullyLoaded, removeJobsLoaded } from '../redux/Recruiter/Common/RecruiterCommonActions';
import { loginRequired } from '../redux/Account/Login/LoginActions';
import { getJobOffersCreatedByRecruiter } from '../repositories/JobOfferRepository';

export function useFetchJobOffersForRecruiter() {

    const isLoggedInSuccessfully = useSelector(state => state.LoginState.loggedInSuccessfully);
    const dispatch = useDispatch();
    let jobs = useSelector(state => state.RecruiterCommonState.jobList);
    const jobOffersLoadingError = useSelector(state => state.JobListState.jobOffersSuccessfullyLoaded);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if (!isLoggedInSuccessfully) {

            if (jobs.length > 0) {
                dispatch(removeJobsLoaded);
            }

            dispatch(loginRequired);
        }
        else {
            const fetchJobs = async () => {

                if ((jobs.length === 0) && !jobOffersLoadingError) {

                    dispatch(loadingJobOffers);

                    const data = await getJobOffersCreatedByRecruiter(token, () => dispatch(failureLoadingJobOffer));

                    if (typeof data !== "undefined" && data.status !== 401) {

                        const json = await data.json();

                        dispatch(jobOffersSuccessfullyLoaded(json));
                    }
                    else {
                        dispatch(failureLoadingJobOffer);
                        dispatch(loginRequired);
                    }
                }
                else {
                    dispatch(jobOffersSuccessfullyLoaded(jobs));
                }
            }

            fetchJobs();
        }
    }, [isLoggedInSuccessfully, dispatch, jobOffersLoadingError, jobs, token])
}