import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jobListLoaded, jobListLoadingError, jobListLoading } from '../redux/job/jobListActions';
import { getJobOffersCreatedByRecruiter, getJobOffers } from '../repositories/jobOfferRepository';

export default function useFetchJobOffers(isRecruiter) {

    const dispatch = useDispatch();
    const isJobListLoaded = useSelector(state => state.JobListState.jobListLoaded);
    const requiresRefreshingJobList = useSelector(state => state.JobListState.requiresRefreshingJobList);
    const token = sessionStorage.getItem("token");

    useEffect(() => {

        const fetchJobs = async () => {            

            if (!isJobListLoaded || requiresRefreshingJobList ) {

                dispatch(jobListLoading);

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
                }

            }
        }

        fetchJobs();

    }, [dispatch, isJobListLoaded, token, requiresRefreshingJobList, isRecruiter])
}