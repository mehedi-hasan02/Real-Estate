import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";


const Home = () => {
    const estates = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {
                    estates.map(estate => <Estate key={estates.key} estates={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;