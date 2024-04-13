import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

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
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0   flex-1 bg-[#1313130D] rounded-xl">
                        <img src={stateDetails.image} alt="" className="object-contain  h-full" />
                    </div>
                    <div className="flex flex-col rounded-sm  flex-1 space-y-4">
                        <h1 className=" leading-none text-4xl font-bold">{stateDetails.estate_title}</h1>
                        <p className="text-lg">By: {stateDetails.segment_name}</p>
                        <hr />
                        <div className="flex gap-5">
                            <p>Area: {stateDetails.area}</p>
                            <p><span>Status: </span>{stateDetails.status}</p>
                            <p>Price: {stateDetails.price}</p>
                        </div>
                        <hr />
                        <p><span className="font-bold">Review:</span> {stateDetails.description}</p>
                        <div className="flex gap-3 items-center">
                            <p className="font-bold">Facilities</p>
                            {
                                stateDetails.facilities.map(tag => <p key={id} className="bg-[#17BE0A0D] rounded-full px-3 p-1 text-[#23BE0A] font-bold whitespace-nowrap">{tag}</p>)
                            }
                        </div>
                        <div>
                            <p className="flex items-center gap-1"><CiLocationOn className="text-blue-600" />{stateDetails.location}</p>
                        </div>
                        <div>
                        <Link to='/'>
                            <button>Back to home</button>
                        </Link>
                    </div>
                    </div>
                   
                </div>

            )}
        </div>
    );
};

export default EstateDetails;
