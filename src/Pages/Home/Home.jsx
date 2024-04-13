import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";


const Home = () => {
    const estates = useLoaderData();
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center mt-10 mb-5">Estate</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    estates.map(estate => <Estate key={estates.key} estates={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;