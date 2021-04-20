import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jobListLoaded, jobListLoadingError } from '../redux/job/jobListActions';
import { loginRequired } from '../redux/account/loginActions';
import { getJobOffersCreatedByRecruiter, getJobOffers } from '../repositories/jobOfferRepository';

export default function useFetchJobOffers(isRecruiter) {

    const dispatch = useDispatch();
    let jobs = useSelector(state => state.JobListState.jobListObjects);
    const jobOffersLoadingError = useSelector(state => state.JobListState.jobListLoadingError);
    const token = sessionStorage.getItem("token");

    useEffect(() => {

        const fetchJobs = async () => {

            if ((jobs.length === 0)) {

                let data;

                if (isRecruiter) {
                    data = await getJobOffersCreatedByRecruiter(token, () => dispatch(jobListLoadingError));
                }
                else {
                    data = await getJobOffers(token, () => dispatch(jobListLoadingError));
                }

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

    }, [dispatch, jobOffersLoadingError, jobs, token, isRecruiter])
}