
const Estate = ({estates}) => {
    return (
        <div className="">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[300px] w-full" src={estates.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estates.estate_title}</h2>
                    <div>
                        <p></p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;