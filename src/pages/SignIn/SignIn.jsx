import Lottie from 'lottie-react';
import logInLottieData from '../../assets/lottie/logIn.json'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('located for', location);
    const form = location.state || "/";

    const handleSignIn
        = e => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            const user = { email, password }
            console.log(user);

            signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(form)
            })
            .catch(error => {
                console.log(error);
            })
        }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={logInLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-center mt-4 text-5xl font-bold">Sign In !</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;