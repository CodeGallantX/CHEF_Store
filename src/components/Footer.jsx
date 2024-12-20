import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    console.log("Email submitted:", email);
    setEmail('');
    alert("Thank you for signing up!");
  };

  return (
    <div>
      <footer className='bg-black px-10 xl:px-32 py-12'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/">
            <img src="/logo.webp" alt="logo" className='w-full h-7'/>
          </a>
          <ul className='flex flex-row items-center justify-center text-white gap-16'>
            <li><a href="/#products">Cookware</a></li>
            <li><a href="#">Knives</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className='flex flex-col items-start justify-center gap-2 mt-4 md:mt-0'>
            <form onSubmit={handleSubmit} className='flex flex-row items-center w-full max-w-sm relative'>
              <input 
                type="email"
                name="email" 
                id="newsletter" 
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow font-sans bg-[#242424] outline-none pl-4 pr-20 py-3 rounded-lg border-none placeholder:text-[#636363] placeholder:text-md focus:ring-1 focus:ring-[#fff] transition-all  duration-300 ease-in-out text-md font-medium text-[#919090]"
                required
              />
              <button 
                type="submit" 
                className='absolute group bg-white text-black px-3 py-2 rounded-lg right-0 -translate-x-3 cursor-pointer transition-colors duration-200 hover:bg-black outline-none'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover:fill-white" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                  </svg>
              </button>                  
            </form>
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-8'>
          <div className='flex flex-row items-center justify-start gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <span className="text-sm text-white">41 plot 5, Port-Harcourt, Nigeria</span>
          </div>
          <a href='mailto:' className='flex flex-row items-center justify-start gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            <span className="text-sm text-white">chefward@tot.org</span>
          </a>
          <a href="tel:" className='flex flex-row items-center justify-start gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              <path fillRule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"/>
            </svg>
            <span className="text-sm text-white">+44 034 536 7567</span>
          </a>
        </div>
        <hr className="bg-[#636363] h-[1px] w-full border-none mt-10 mb-5"/>
        <div className="flex flex-row justify-between items-center text-white text-sm">
          <span>&copy; 2024 - Copyright</span>
          <span>Built by <a href="https://github.com/codegallantx" target='_blank' className="active:text-[#db6a18] text-[#db6a18]">CodeGallantX</a></span>
          <div className="flex flex-row items-center justify-end gap-2">
            <a href="#">Privacy</a>
            |
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
