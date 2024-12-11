import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company} = useLoaderData();
    return (
        <div>
            <h2>job details for {title}</h2>
            <p>apply for {company}</p>
            <p>deadline :</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;