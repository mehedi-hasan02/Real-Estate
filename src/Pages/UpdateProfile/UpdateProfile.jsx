import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { users,handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState(users.displayName || '');
    const [email, setEmail] = useState(users.email || '');
    const [photo, setPhoto] = useState(users.photoURL || '');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newName = e.target.name.value;
        const newPhoto = e.target.photo.value;
        handleUpdateProfile(newName,newPhoto);
        toast.success('Profile Update Successful')
        navigate('/');
        
    };

    return (
        <div className="hero lg:min-h-[690px]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero-content md:w-[700px] lg:w-[1200px]  flex-col">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                className="input input-bordered"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="photo"
                                name="photo"
                                className="input input-bordered"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
