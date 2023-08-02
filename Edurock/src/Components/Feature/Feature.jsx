import FeatureCard from "./FeatureCard";


const Feature = () => {
  return (
    <div className="pb-[50px] bg-darkBg">
      <div className="container-fluid">
        <div className="single-feature-wrapper">
          <div className="row">
            <FeatureCard
              className={'first'}
              heading={'36+ Pages Ready'}
              paragraph={'Edurock is built specially for Education, Online Course & Events.'}
            />
            <FeatureCard
              heading={'LMS Ready'}
              paragraph={'Edurock is built specially for also Learning Managment System.'}
            />
            <FeatureCard
              heading={'Elementor'}
              paragraph={'Modern and Popular Elementor drag & drop page builder used.'}
            />
            <FeatureCard
              className={'last'}
              heading={'Multi Header & Footers'}
              paragraph={'Build powerful websites quickly with beautiful Header & Footer.'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;