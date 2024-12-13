import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const submitJobApplication = (e) => {
        e.preventDefault()
        const linkedIn = e.target.linkedIn.value;
        const gitHub = e.target.gitHub.value;
        const resume = e.target.resume.value;
        

        const jobApplier = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            gitHub,
            resume
        }
        
        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplier)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Job successfully apply",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications')
            }
        })

    }

    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl text-center font-bold">Apply Job and Good Luck</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkedin URL</span>
                    </label>
                    <input type="url" name='linkedIn' placeholder="Linkedin URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name='gitHub' placeholder="Github URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;