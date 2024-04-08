import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handelRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then()
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div>
                <h1 className="text-5xl font-bold text-center mt-5">Register now!</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-5">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Don't have an account? 
                            <Link className="text-blue-800" to='/login'> Login</Link>
                        </p>
                    </form>
                </div>
            </div>
    );
};

export default Register;