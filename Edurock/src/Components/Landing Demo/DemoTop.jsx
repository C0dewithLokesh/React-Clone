import DemoCard from "./DemoCard";
import Home1 from "../../assets/home-1.webp";
import HomeResponsive1 from "../../assets/home-responsive-1.webp";
import HomeDark1 from "../../assets/home-1-dark.webp";
import HomeDarkResponsive1 from "../../assets/home-responsive-1-dark.webp";
import ComingSoon from "../../assets/comming-soon.webp";
import DemoMainHeading from "./DemoMainHeading";


const DemoTop = () => {
  return (
    <div className="pt-[50px]" id="demos">
      <div className="container-fluid">
        <DemoMainHeading
          bgHeading={'Homepages'}
          p1={'12+ Stunning Demos'}
          p2={'Unlimited possibilities'}
        />

        <div className="row">
          <div className="col-lg-12">
            <div className="demo-wrapper">
              <div className="row justify-center">
                <DemoCard
                  img={Home1}
                  mobileImg={HomeResponsive1}
                  heading={'Home (Default)'}
                  btnHeading={'Light'}
                />
                <DemoCard
                  img={HomeDark1}
                  mobileImg={HomeDarkResponsive1}
                  heading={'Home (Default)'}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  img={Home1}
                  mobileImg={HomeResponsive1}
                  heading={'Home (Default)'}
                  btnHeading={'Light'}
                />
                <DemoCard
                  img={HomeDark1}
                  mobileImg={HomeDarkResponsive1}
                  heading={'Home (Default)'}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  img={Home1}
                  mobileImg={HomeResponsive1}
                  heading={'Home (Default)'}
                  btnHeading={'Light'}
                />
                <DemoCard
                  img={HomeDark1}
                  mobileImg={HomeDarkResponsive1}
                  heading={'Home (Default)'}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  img={ComingSoon}
                  mobileImg={HomeDarkResponsive1}
                  heading={'Comming Soon More'}
                  mobileClass={'hidden'}
                  btnHeading={'Hot'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoTop;