

// eslint-disable-next-line react/prop-types
const BannerImg = ({ className, img }) => {
  return (
    <div className={`animated-promo ${className}`}>
      <img src={img} alt="Banner-Images" />
      <img src={img} alt="Banner-Images" />
    </div>
  );
};

export default BannerImg;
