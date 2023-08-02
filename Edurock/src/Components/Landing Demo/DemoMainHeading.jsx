/* eslint-disable react/prop-types */
const DemoMainHeading = ({ bgHeading, p1, p2 }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="main-demo-title-area text-center">
          <h2 className="text-[150px] text-offwhite mb-0 opacity-[0.25]">
            {bgHeading}
          </h2>
          <div className="title-wrapper mt-[-120px] mb-[50px]">
            <h3 className="title text-[35px] leading-[1.3] text-white">
              <span className="highlight text-secondaryColor block text-[60px] relative z-[1]">
                {p1}
              </span>
              {p2}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoMainHeading;
