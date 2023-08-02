/* eslint-disable react/prop-types */
const FooterCard = ({ cardImg, p1, p2  }) => {
  return (
    <div className="basis-1/5 text-center px-[10px] mt-[30px]">
      <div className="icon flex justify-center">
        <img src={cardImg} alt="Splash Images" className='opacity-[0.75] max-h-[45px]' />
      </div>

      <div className="title font-normal text-base mb-0 opacity-[0.75] text-white mt-[15px] leading-6">
        {p1}
        <br />
        {p2}
      </div>
    </div>
  );
};

export default FooterCard;
