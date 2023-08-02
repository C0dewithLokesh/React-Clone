import ContentSingle from "./ContentSingle";
import ContentSingleTwo from "./ContentSingleTwo";

const AnimateSection = () => {
  return (
    <div className="animate__content py-[50px] bg-darkBg border-t-[2px] border-dashed border-[#2d2d2d]">
      <div className="container-fluid">
        <div className="animate__content__wrap">
          <ContentSingle heading={'Responsive & Retina Ready'} />
          <ContentSingleTwo heading={'SEO Optimized'} />

          <ContentSingle heading={'Unique Elements'} />
          <ContentSingleTwo heading={'It’s Super Fast'} />

          <ContentSingle heading={'Light/Dark Screen Mode'} />
          <ContentSingleTwo heading={'SASS Preprocessor'} />

          <ContentSingle heading={'BEM Methodology'} />
          <ContentSingleTwo heading={'Latest Bootstrap'} />

          <ContentSingle heading={'High Quality Support'} />
          <ContentSingleTwo heading={'Fully Customizable'} />

          <ContentSingle heading={'Lifetime Update'} />
          <ContentSingleTwo heading={'Google Font'} />
        </div>
      </div>
    </div>
  )
}

export default AnimateSection;