import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jobListLoading, jobListLoaded, jobListLoadingError } from '../redux/job/jobListActions';
import { loginRequired } from '../redux/account/loginActions';
import { getJobOffersCreatedByRecruiter } from '../repositories/jobOfferRepository';

export function useFetchJobOffersForRecruiter() {

    const isLoggedInSuccessfully = useSelector(state => state.LoginState.loggedInSuccessfully);
    const dispatch = useDispatch();
    let jobs = useSelector(state => state.JobListState.jobListObjects);
    const jobOffersLoadingError = useSelector(state => state.JobListState.jobListLoadingError);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
        if (!isLoggedInSuccessfully) {

            dispatch(loginRequired);
        }
        else {
            const fetchJobs = async () => {

                if ((jobs.length === 0) && !jobOffersLoadingError) {

                    dispatch(jobListLoading);

                    const data = await getJobOffersCreatedByRecruiter(token, () => dispatch(jobListLoadingError));

                    if (typeof data !== "undefined" && data.status !== 401) {

                        const json = await data.json();

                        dispatch(jobListLoaded(json));
                    }
                    else {
                        dispatch(jobListLoadingError);
                        dispatch(loginRequired);
                    }
                }
            }

            fetchJobs();
        }
    }, [isLoggedInSuccessfully, dispatch, jobOffersLoadingError, jobs, token])
}