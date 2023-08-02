/* eslint-disable react/jsx-no-undef */
import { FaAt } from "react-icons/fa";
import Award from "../assets/award.webp";
import Banner1 from "../assets/banner-01.webp";
import Banner2 from "../assets/banner-02.webp";
import Banner3 from "../assets/banner-03.webp";
import Banner4 from "../assets/banner-04.webp";
import Banner5 from "../assets/banner-05.webp";
import BannerImg from "./BannerImg";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {

  return (
    <div className="landing-hero-area">
      <div className="container-fluid container-fluid--cp-80 pr-[100px] pl-[100px]">
        <div className="row h-[800px] items-center">
          <div className="col-lg-12 col-xl-6 relative mt-5">
            <div className="flex items-center">
              <FaAt size={50} color="#f2277e" className="mr-[10px] my-3" />
              <div>
                <label className="w-full text-sm leading-none text-[#c4cfdf]">Get Support</label>
                <a href="#" className=" text-lg leading-none text-white duration-[0.3s]">Submit Ticket Here</a>
              </div>
            </div>

            <h2 className="main-top-content__title leading-none w-[750px] max-w-full mb-[20px] text-[50px]">
              <span>Dream site best</span>
              <span className="typewriter">
                for
                <span className="ml-[10px] mb-0 flex items-center">
                  <Typewriter
                    words= {['Education', 'LMS Service', 'Online Course', 'Marketplace', 'University', 'Kindergarten']}
                    loop={false}
                  />
                </span>
                <span>
                  <Cursor />
                </span>
              </span>
            </h2>

            <p className=" text-offwhite text-xl tracking-[0.5px] max-w-[60%]">
              A best WordPress theme for different purposes that creativity, efficiency, and diversity.
            </p>

            <div className="flex items-center mt-10">
              <img src={Award} alt="Banner Image" className=" max-w-[400px]" />
            </div>
          </div>

          <div className="col-lg-12 col-xl-6">
            <div className="animated-promo-wrapper max-h-[700px] overflow-hidden relative">
              <div className="animated-promo-loop my-0 -mx-[10px] flex items-center">
                <BannerImg img={Banner1} className={'animated-promo-tbone'} />

                <BannerImg img={Banner2} className={'animated-promo-tbtwo'} />

                <BannerImg img={Banner3} className={'animated-promo-tbthree'} />

                <BannerImg img={Banner4} className={'animated-promo-tbfour d-none d-sm-block'} />

                <BannerImg img={Banner5} className={'animated-promo-tbfive d-none d-sm-block'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;