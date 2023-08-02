/* eslint-disable react/no-unescaped-entities */
import FooterCard from "./FooterCard";
import updatedImg from '../../assets/updated.webp';
import supportImg from '../../assets/support.webp';
import screenImg from '../../assets/screen.webp';
import speedImg from '../../assets/speedometer.webp';
import codeImg from '../../assets/code.webp';

const FooterCardData = [
  {
    key: 1,
    img: updatedImg,
    p1: 'Free updated',
    p2: 'LifeTime'
  },
  {
    key: 2,
    img: supportImg,
    p1: 'Premium Support',
    p2: '6 Months Free'
  },
  {
    key: 3,
    img: screenImg,
    p1: 'Light/Dark',
    p2: 'Screen (Enjoy)'
  },
  {
    key: 4,
    img: speedImg,
    p1: 'High Speed',
    p2: 'Performance'
  },
  {
    key: 5,
    img: codeImg,
    p1: 'Clean code',
    p2: 'Developer Friendly'
  },
];

const Footer = () => {
  return (
    <footer className=" bg-darkBg">
      <div className="footer-area relative pt-[120px] pb-[130px] text-center">
        <div className="container">
          <div className="row relative z-[999]">
            <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 col-12">
              <h2>Let's go to purchase.</h2>
              <p className="mt-5 text-lg text-offwhite">
                Purchase Edurock and Make Your Expected Dream Site Clean &amp; faster.
              </p>
              
              <div className="purchase_btn">
                <a href="#" className="default_btn">
                  Purchase Now
                </a>
              </div>
            </div>

            <div className="flex mt-[50px] flex-wrap px-20 py-0">
              {FooterCardData.map((item) => (
                <FooterCard
                  key={item.key}
                  cardImg={item.img}
                  p1={item.p1}
                  p2={item.p2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright border-t border-[#333]">
        <p className="text-center text-base py-[25px] px-0 text-offwhite m-0">
          All Right Reserved 2023 Edurock
        </p>
      </div>
    </footer>
  )
}

export default Footer