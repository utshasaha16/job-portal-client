import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { title, company, _id } = useLoaderData();
    return (
        <div>
            <h2>job details for {title}</h2>
            <p>apply for {company}</p>
            <p>deadline :</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;