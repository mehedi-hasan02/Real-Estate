import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import 'animate.css';

const EstateDetails = () => {
    const estateDetails = useLoaderData();
    const { id } = useParams();

    const [stateDetails, setStateDetails] = useState(null);

    useEffect(() => {
        const findEstate = estateDetails.find(sEstate => sEstate.id === parseInt(id));
        setStateDetails(findEstate);
    }, [id, estateDetails]);

    return (
        <div>
            {stateDetails && (
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between gap-12">
                    <div className="flex p-2 mt-8 lg:mt-0 flex-1 bg-[#1313130D] rounded-xl">
                        <img src={stateDetails.image} alt="" className="hover:animate__animated hover:animate__pulse w-full h-[170px] md:h-[460px] lg:h-[500px] bg-cover rounded-xl" />
                    </div>
                    <div className="flex flex-col rounded-sm  flex-1 space-y-4 mt-5">
                        <h1 className="animate__animated animate__fadeInRight leading-none text-4xl font-bold">{stateDetails.estate_title}</h1>
                        <p className="animate__animated animate__fadeInRight animate__delay-1s text-lg">By: {stateDetails.segment_name}</p>
                        <hr />
                        <div className="animate__animated animate__fadeInRight animate__delay-1.5s flex gap-5">
                            <p>Area: {stateDetails.area}</p>
                            <p><span>Status: </span>{stateDetails.status}</p>
                            <p>Price: {stateDetails.price}</p>
                        </div>
                        <hr />
                        <p className="animate__animated animate__fadeInRight"><span className="font-bold">Review:</span> {stateDetails.description}</p>
                        <div className="animate__animated animate__fadeInRight flex flex-wrap lg:gap-3 items-center">
                            <p className="animate__animated animate__fadeInRight font-bold">Facilities :</p>
                            {
                                stateDetails.facilities.map(tag => <p key={id} className="animate__animated animate__fadeInRight bg-[#17BE0A0D] rounded-full lg:px-3 p-1 text-[#23BE0A] font-bold whitespace-nowrap">{tag}</p>)
                            }
                        </div>
                        <div>
                            <p className="animate__animated animate__fadeInRight flex items-center gap-1"><CiLocationOn className="text-blue-600" />{stateDetails.location}</p>
                        </div>
                        <div>
                        <Link to='/'>
                            <button className="animate__fadeInUp  btn bg-green-500 text-white">Back to home</button>
                        </Link>
                    </div>
                    </div>
                   
                </div>

            )}
        </div>
    );
};

export default EstateDetails;
