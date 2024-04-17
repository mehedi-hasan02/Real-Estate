import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Profile = () => {

    const { users } = useContext(AuthContext);
    const [name, setName] = useState(users.displayName || '');
    const [email, setEmail] = useState(users.email || '');
    const [photo, setPhoto] = useState(users.photoURL || '');

    console.log(name);

    return (
        <div className="h-[630px]">
            <div className="flex flex-col lg:flex-row justify-center items-center md:gap-3 lg:gap-7 lg:w-[500px] mx-auto mt-20 p-5 border rounded-xl">
                <div className="">
                    <img src={photo} alt="" className="w-[150px] mx-auto" />
                </div>
                <div className="mt-5 lg:mt-24">
                    <div>
                        <h3><span className="font-bold">Name:</span> {name}</h3>
                    </div>
                    <div>
                        <h3><span className="font-bold">Email:</span> {email}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;