/* eslint-disable react/prop-types */
const SupportCard = ({ img, heading, paragraph, btnContent, btnClass }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-[30px]">
      <div className="team__special__service">
        <div className="ts__inner">
          <div className="ts__icon">
            <img src={img} className="w-[100px]" alt="" />
          </div>

          <div className="ts__content">
            <h4 className="ts__title text-2xl leading-8 mb-[10px] text-white">
              <a href="#" className=" hover:text-[#5f2ded]">{heading}</a>
            </h4>

            <p className="text-base leading-7 text-white mb-[22px] duration-[0.3s]">
              {paragraph}
            </p>

            <a href="#" className={`default_btn ${btnClass}`}>
              {btnContent}
            </a>
          </div>
        </div>

        <div className="ts__icon__bg absolute bottom-[-20px] right-[-30px] opacity-[0.08]">
          <img src={img} alt="Icon Image" className="w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
