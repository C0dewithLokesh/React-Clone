import DemoMainHeading from "./Landing Demo/DemoMainHeading";
import ResponsiveMocup from "../assets/responsive_mocup.webp";

const ResponsiveScreen = () => {
  return (
    <div className="responsive_screen_area  pb-[100px] pt-20">
      <div className="container-fluid">
        <DemoMainHeading
          bgHeading={"Responsive"}
          p1={"100% Responsive"}
          p2={"Various screens functioned properly."}
        />

        <div className="row">
          <div className="colo-lg-12">
            <div className="landing-premium-plugin-image text-center">
              <img className="img-fluid" src={ResponsiveMocup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveScreen;