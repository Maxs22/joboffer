import React  from 'react';
import { useSelector } from 'react-redux';


export default function JobDetail(props) {

    const jobToDisplay = useSelector(state => state.jobDetailState.jobDetailObject);
    
    return (
        <div>
            <h5>
            {jobToDisplay.title}
            </h5>
        </div>
    );

}
