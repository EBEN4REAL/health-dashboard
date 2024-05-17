import React from 'react';
import Logo from '@assets/img/logo.png';
import BannerPhoto from '@assets/img/banner-photo.png';

const Banner: React.FC = () => {
  return (
    <div className="w-full hidden text-white xl:w-1/2 lg:w-1/2 lg:block xl:block pl-7 bg-banner-gradient ">
      <div className='max-w-1300 lg:flex xl:flex min-h-screen lg:flex-shrink-0 lg:flex-col lg:justify-evenly xl:flex-shrink-0 xl:flex-col xl:justify-evenly mt-5'>
        <div>
          <img src={Logo} className="w-[35.46px]" alt="Logo" />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="text-center mt-20">
            <img src={BannerPhoto} className="min-w-[427.62px]" alt="Banner" />
          </div>
          <div className="text-center font-medium text-[40px] tracking-wider leading-[52.08px] text-theme-gray mt-5">
            Royalty collections, <br />
            simplified. It’s next level!
          </div>
          <div className="text-center text-theme-gray font-normal mt-3 text-[22px] leading-[28.64px]">
            Revenue based invoice collection to <br />
            make royalty collection as easy as...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
