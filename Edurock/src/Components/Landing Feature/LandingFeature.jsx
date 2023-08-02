import DemoMainHeading from "../Landing Demo/DemoMainHeading";
import LandingFeaCard from "./LandingFeaCard";
import fi1 from "../../assets/fi-01.webp";
import fi21 from "../../assets/fi-21.webp";
import fi22 from "../../assets/fi-22.webp";
import fi23 from "../../assets/fi-23.webp";
import fi26 from "../../assets/fi-26.webp";

const LandingFeature = () => {
  return (
    <div className="landing-feature-area py-20 ">
      <div className="container-fluid">
        <DemoMainHeading
          bgHeading={"Features"}
          p1={"Core Features"}
          p2={"Edurock Exclusive Features"}
        />

        <div className="landing-feature-wrapper">
          <div className="row row-30">
            <LandingFeaCard
              img={fi1}
              heading={'12 Homepages'}
            />
            <LandingFeaCard
              img={fi21}
              heading={'30+ Innerpages'}
            />
            <LandingFeaCard
              img={fi22}
              heading={'Elementor Page Builder'}
            />
            <LandingFeaCard
              img={fi23}
              heading={'One Click Demo Import'}
            />
            <LandingFeaCard
              img={fi26}
              heading={'Powerful Theme Option'}
            />

            <LandingFeaCard
              img={fi1}
              heading={'12 Homepages'}
            />
            <LandingFeaCard
              img={fi21}
              heading={'30+ Innerpages'}
            />
            <LandingFeaCard
              img={fi22}
              heading={'Elementor Page Builder'}
            />
            <LandingFeaCard
              img={fi23}
              heading={'One Click Demo Import'}
            />
            <LandingFeaCard
              img={fi26}
              heading={'Powerful Theme Option'}
            />

            <LandingFeaCard
              img={fi1}
              heading={'12 Homepages'}
            />
            <LandingFeaCard
              img={fi21}
              heading={'30+ Innerpages'}
            />
            <LandingFeaCard
              img={fi22}
              heading={'Elementor Page Builder'}
            />
            <LandingFeaCard
              img={fi23}
              heading={'One Click Demo Import'}
            />
            <LandingFeaCard
              img={fi26}
              heading={'Powerful Theme Option'}
            />
            
            <LandingFeaCard
              img={fi1}
              heading={'12 Homepages'}
            />
            <LandingFeaCard
              img={fi21}
              heading={'30+ Innerpages'}
            />
            <LandingFeaCard
              img={fi22}
              heading={'Elementor Page Builder'}
            />
            <LandingFeaCard
              img={fi23}
              heading={'One Click Demo Import'}
            />
            <LandingFeaCard
              img={fi26}
              heading={'Powerful Theme Option'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingFeature;