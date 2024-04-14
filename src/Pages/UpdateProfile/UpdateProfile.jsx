import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

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
        navigate('/');
        
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col">
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