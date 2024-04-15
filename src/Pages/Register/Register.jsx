import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../../Firebase/firebase.config";
import { Helmet } from "react-helmet";


const Register = () => {
    const { createUser,handleUpdateProfile,logOut } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name,email, password,photo } = data;

        if (!/(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(password)) {
            toast.error('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return;
        }
        createUser(email, password)
        .then(res => {
            handleUpdateProfile(name,photo)
            logOut()
            toast.success('User created successfully');
            navigate('/')
        })
            .catch(error => {
                setRegisterError(error.message);
            })

    }



    return (
        <div className="mt-10 mb-10 p-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="text-5xl font-bold text-center mt-5 mb-5">Register now!</h1>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered"  {...register("photo", { required: true })} />
                        {errors.photo && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex items-center w-full relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="absolute top-4 right-2 cursor-pointer"></FaEyeSlash> : <FaEye className="absolute top-4 right-2 cursor-pointer" />}
                            </span>

                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Don't have an account?
                        <Link className="text-blue-800" to='/login'> Login</Link>
                    </p>
                </form>
                {/* {
                    registerError && <p>{registerError}</p>
                } */}
            </div>
            {/* <Toaster position="bottom-center" /> */}
        </div>
    );
};

export default Register;