import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";


const HotJobCard = ({ job }) => {
    const { title, location, company_logo, requirements, company, description, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-14'
                        src={company_logo}
                        alt="company logo" />
                </figure>
                <div>
                    <h2>{company}</h2>
                    <p className='flex gap-1 items-center'><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map(skill => <p className='border rounded-md text-center px-2 hover:text-purple-600 hover:bg-gray-900'>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;