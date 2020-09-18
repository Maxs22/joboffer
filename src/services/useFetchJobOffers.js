import { useEffect } from 'react';
import { jobListLoading, jobListLoaded, jobListLoadingError } from '../redux/job/jobListActions';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../repositories/common/getData';


export function useFetchJobOffers() {

    const dispatch = useDispatch();

    const jobOfferLoadingError = useSelector(state => state.JobListState.jobListLoadingError);
    let jobs = useSelector(state => state.JobListState.jobListObjects);

    useEffect(() => {

        const fetchJobs = async () => {

            if ((jobs.length === 0) && !jobOfferLoadingError) {

                dispatch(jobListLoading);

                const data = await getData('/joboffers', () => dispatch(jobListLoadingError));

                if (typeof data !== "undefined") {

                    const json = await data.json();

                    dispatch(jobListLoaded(json));
                }
            }
        }

        fetchJobs();

    }, [dispatch, jobs, jobOfferLoadingError]);

}