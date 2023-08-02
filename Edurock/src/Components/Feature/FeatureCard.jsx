/* eslint-disable react/prop-types */
const FeatureCard = ({ heading, paragraph, className}) => {
  return (
    <div className="col-lg-3 col-md-6 single_feat">
      <div className={`single_feature-${className} mb-[30px] pr-[35px] border-dashed border-r-[2px] border-[#eee] pl-5`}>
        <div>
          <h3 className="title text-lg leading-[1.2] text-offwhite mb-[15px]">
            {heading}
          </h3>
          <p className="text-base">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
