/* eslint-disable react/prop-types */

const LandingFeaCard = ({ img, heading }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 single__feature__wrap">
      <div className="single__feature">
        <div className="inner text-center">
          <div className="icon">
            <img src={img} alt="Prevoew Images" className="max-w-[80px]" />
          </div>
          <h6 className="title">{heading}</h6>
        </div>
      </div>
    </div>
  );
};

export default LandingFeaCard;
