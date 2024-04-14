import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Estate = ({ estates }) => {
    const { id, facilities } = estates;
    return (
        <div className="card border border-[#d1cfcf] flex flex-col p-3">
            <div data-aos="zoom-in" data-aos-delay="100" className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[300px] w-full" src={estates.image} alt="Shoes" /></figure>
                <div className="flex-grow p-3 space-y-3">
                    <div className="h-[50px]">
                        <h2 data-aos="fade-up-left" data-aos-delay="200" className="card-title">{estates.estate_title}</h2>
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="350" >{estates.segment_name}</p>
                    <div data-aos="zoom-in" data-aos-delay="500" className="bg-orange-500 text-white w-12 text-center  rounded absolute top-2 right-2">
                        <p>{estates.status}</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="650" className="flex gap-3">
                        <p>Area: {estates.area}</p>
                        <p>Price: {estates.price}</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="800" className="flex gap-2 text-center">
                        {
                            facilities.map(facilitie => <p className="bg-[#d5fccf] rounded-xl">{facilitie}</p>)
                        }
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="950" >
                        <p className="flex items-center gap-1"><CiLocationOn className="text-blue-600" />{estates.location}</p>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="1100" className="card-actions">
                        <Link to={`/estateDetails/${id}`}>
                            <button className="btn bg-[#23BE0A] text-white">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;