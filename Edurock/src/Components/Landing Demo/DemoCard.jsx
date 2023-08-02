/* eslint-disable react/prop-types */

const DemoCard = ({ img, mobileImg, heading, className, mobileClass, btnHeading, cardClass }) => {
  return (
    <div className={`col-xl-4  col-lg-6 col-sm-6 demo-custom-padding py-0  my-[30px] mx-0 ${cardClass ? cardClass : 'px-[60px]'}`}>
      <div className="demo-item">
        <div className="solo-demo">
          <a href="#" className="solo-demo-link">
            <div className="thumbnail relative">
              <img src={img} alt="Home Img" />

              <div className={`mobile-view ${mobileClass}`}>
                <div className="inner">
                  <img src={mobileImg} alt="Responsive Images" />
                </div>
              </div>
            </div>

            <div className="content p-[20px] block text-center">
              <div className="title">
                {heading}
                <span className={`label-light ${className} flex items-center`}>
                  {btnHeading}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DemoCard;