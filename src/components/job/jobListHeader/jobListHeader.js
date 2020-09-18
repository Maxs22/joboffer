import React from 'react';
import { useSelector } from 'react-redux';

export default function JobListHeader() {

    let orderingBy = useSelector(state => state.JobListState.jobListOrderingBy);

    return (
        <>
            <h3>Avisos laborales ordenados por: { orderingBy }</h3>
            <hr />
        </>
    );
}