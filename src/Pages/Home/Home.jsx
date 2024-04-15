import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Banner from "../../Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Helmet } from "react-helmet";
// ..
AOS.init();


const Home = () => {
    const estates = useLoaderData();
    return (
        <div className="mb-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="mt-10 lg:mb-10">
                <Banner></Banner>
            </div>
            <div className="mb-10">
                <h1 data-aos="zoom-in" data-aos-delay="50"  className="text-5xl font-bold text-center mt-10 mb-5">Estate</h1>
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