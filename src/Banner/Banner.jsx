import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full  rounded-xl">
      <div id="slide1" className="carousel-item relative w-full opacity-100 h-[200px] md:h-[350px] lg:h-[500px]" style={{ backgroundImage: 
        `url(${slider1})` }}>
        <div >
          {/* <img src={slider1} className="w-full bg-cover bg-center" /> */}
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-black ml-32 lg:text-5xl lg:font-extrabold mb-5'>Discover Your Dream Home<br></br> Where Every Brick Tells a Story</h1>
          <p className='ml-32 text-[#f9f4f4] lg:font-semibold'>Unlock Your Dream Home: Elevating Real Estate Experiences.
            Tailored Solutions for Every Doorstep, Every Dream.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full opacity-100" style={{ backgroundImage: `url(${slider2})` }}>
        {/* <img src={slider2} className="w-full" /> */}
        <div className='flex flex-col justify-center'>
          <h1 className='ml-32 bg-gradient-to-r bg-300% from-secondary via-blue-400 to-primary text-transparent bg-clip-text animate-gradient text-5xl font-extrabold mb-5'>Discover Your Dream Home<br></br> Where Every Brick Tells a Story</h1>
          <p className='ml-32 text-white'>Unlock Your Dream Home: Elevating Real Estate Experiences.
            Tailored Solutions for Every Doorstep, Every Dream.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${slider3})` }}>
        {/* <img src={slider3} className="w-full" /> */}
        <div className='flex flex-col justify-center'>
          <h1 className='ml-32 bg-gradient-to-r bg-300% from-secondary via-blue-400 to-primary text-transparent bg-clip-text animate-gradient text-5xl font-extrabold mb-5'>Discover Your Dream Home<br></br> Where Every Brick Tells a Story</h1>
          <p className='ml-32 text-white'>Unlock Your Dream Home: Elevating Real Estate Experiences.
            Tailored Solutions for Every Doorstep, Every Dream.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${slider4})` }}>
        {/* <img src={slider4} className="w-full" /> */}
        <div className='flex flex-col justify-center'>
          <h1 className='ml-32 bg-gradient-to-r bg-300% from-secondary via-blue-400 to-primary text-transparent bg-clip-text animate-gradient text-5xl font-extrabold mb-5'>Discover Your Dream Home<br></br> Where Every Brick Tells a Story</h1>
          <p className='ml-32 text-white'>Unlock Your Dream Home: Elevating Real Estate Experiences.
            Tailored Solutions for Every Doorstep, Every Dream.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;