import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaGofore,FaGithub } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {

    const {signIn, googleLogin, githubLogin} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        const {email,password} = data;
        signIn(email,password)
        .then(result=>console.log(result))
        .catch(error=>console.log(error))

        
    }
    

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })}/>
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="bg-red-500 p-1 rounded-2xl text-white ">
                            <Link className="flex justify-center items-center gap-2" onClick={googleLogin}><FaGofore/>Google</Link>
                        </div>
                        <div className="bg-gray-500 p-1 rounded-2xl text-white text-center">
                            <Link className="flex justify-center items-center gap-2" onClick={githubLogin}><FaGithub/>Github</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p>Don't have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;