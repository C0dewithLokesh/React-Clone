import DemoCard from "./DemoCard";
import DemoMainHeading from "./DemoMainHeading";
import Home1 from "../../assets/home-1.webp";
import HomeDark1 from "../../assets/home-1-dark.webp";

const DemoBottom = () => {
  return (
    <div className="main-demo-area-inner pb-[90px] pt-[50px]" id="inner_page">
      <div className="container-fluid">
        <DemoMainHeading
          bgHeading={"Inner pages"}
          p1={"Awesome Design"}
          p2={"Stunning Inner pages."}
        />

        <div className="row">
          <div className="col-lg-12">
            <div className="demo-wrapper inner__pages__wrapper">
              <div className="row inner__pages__animation">
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={Home1}
                  mobileImg={Home1}
                  heading={"About"}
                  mobileClass={"hidden"}
                  btnHeading={"Light"}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={Home1}
                  mobileImg={Home1}
                  heading={"Course"}
                  mobileClass={"hidden"}
                  btnHeading={"Light"}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={Home1}
                  mobileImg={Home1}
                  heading={"Course Grid"}
                  mobileClass={"hidden"}
                  btnHeading={"Light"}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={Home1}
                  mobileImg={Home1}
                  heading={"Course List"}
                  mobileClass={"hidden"}
                  btnHeading={"Light"}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={Home1}
                  mobileImg={Home1}
                  heading={"Course Details"}
                  mobileClass={"hidden"}
                  btnHeading={"Light"}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={Home1}
                  mobileImg={Home1}
                  heading={"Course Details 2"}
                  mobileClass={"hidden"}
                  btnHeading={"Light"}
                />
              </div>

              <div className="row inner__pages__animation inner__pages__animation--2">
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={HomeDark1}
                  mobileImg={HomeDark1}
                  heading={"Blog Details"}
                  mobileClass={"hidden"}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={HomeDark1}
                  mobileImg={HomeDark1}
                  heading={"Event Details"}
                  mobileClass={"hidden"}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={HomeDark1}
                  mobileImg={HomeDark1}
                  heading={"Instructor"}
                  mobileClass={"hidden"}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={HomeDark1}
                  mobileImg={HomeDark1}
                  heading={"Instructor Details"}
                  mobileClass={"hidden"}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={HomeDark1}
                  mobileImg={HomeDark1}
                  heading={"Contact"}
                  mobileClass={"hidden"}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
                <DemoCard
                  cardClass={"px-[20px] max-w-[378px]"}
                  img={HomeDark1}
                  mobileImg={HomeDark1}
                  heading={"Login"}
                  mobileClass={"hidden"}
                  className={'label-dark'}
                  btnHeading={'Dark'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBottom;
