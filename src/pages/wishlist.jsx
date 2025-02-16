import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  
  const targetDate = new Date("2024-10-25T23:59:59").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <Header/>
      <div className='relative h-full w-full m-0 p-0 selection:bg-black'>
      <img className='w-screen h-screen object-cover' src="/upcoming-bg.jpg" alt="Maintenance bg" />
      <div className="h-full w-full top-0 absolute bg-black opacity-40"></div>
      <div className='absolute top-1/4 left-[8%] lg:left-[20%]'>
          <div className='text-white px-10 xl:px-20 flex flex-col text-center gap-8'>
            <a href="/" className='flex flex-row justify-center w-44 mx-auto'>
              <img src="/logo.webp" alt="logo" />
            </a>
            <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold'>This site is currently down for maintenance</h1>
            <p className='text-2xl'>We apologize for any inconveniences caused.</p>
            <div className='grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:gap-4 items-center justify-center'>
              <div className="relative flex flex-col gap-[2px] w-28 lg:w-40 py-7 rounded-lg backdrop-blur-md border-2 border-solid border-[#ffffff24]">
                <div className='absolute w-full h-full top-0 left-0 bg-white opacity-10 -z-10 rounded-md'></div>
                <span className="text-4xl lg:text-6xl font-bold">{days}</span>
                <span className="text-sm font-bold">DAYS</span>  
              </div>
              <div className="relative flex flex-col gap-[2px] w-28 lg:w-40 py-7 rounded-lg backdrop-blur-md border-2 border-solid border-[#ffffff24]">
                <div className='absolute w-full h-full top-0 left-0 bg-white opacity-10 -z-10 rounded-md'></div>
                <span className="text-4xl lg:text-6xl font-bold">{hours}</span>
                <span className="text-sm font-bold">HOURS</span>
              </div>
              <div className="relative flex flex-col gap-[2px] w-28 lg:w-40 py-7 rounded-lg backdrop-blur-md border-2 border-solid border-[#ffffff24]">
                <div className='absolute w-full h-full top-0 left-0 bg-white opacity-10 -z-10 rounded-md'></div>
                <span className="text-4xl lg:text-6xl font-bold">{minutes}</span>
                <span className="text-sm font-bold">MINUTES</span>
              </div>
              <div className="relative flex flex-col gap-[2px] w-28 lg:w-40 py-7 rounded-lg backdrop-blur-md border-2 border-solid border-[#ffffff24]">
                <div className='absolute w-full h-full top-0 left-0 bg-white opacity-10 -z-10 rounded-md'></div>
                <span className="text-4xl lg:text-6xl font-bold">{seconds}</span>
                <span className="text-sm font-bold">SECONDS</span>
              </div>
            </div>
          </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App;