import { BsCart3 } from "react-icons/bs";
import Logo from "../assets/logo.webp";

const Header = () => {
  return (
    <div className="absolute left-0 top-5 w-full z-[999] bg-transparent py-[10px] px-0">
      <div className="header-area">
        <div className="header-top-area shadow-none">
          <div className="container-fluid pr-[100px] pl-[100px]">
            <div className="header-wrapper">
              <div className="row items-center">
                {/* logo */}
                <div className="col-lg-3 col-md-3 col-6 logo_area">
                  <div className="logo">
                    <a href="#">
                      <img src={Logo} alt="logo" className="max-w-[200px]" />
                    </a>
                  </div>
                </div>

                {/* header middle */}
                <div className="col-lg-6 col-md-6 col-6 menu_area">
                  <div className="header-middle h-full">
                    <ul className="header_menu flex items-center h-full justify-center">
                      <li>
                        <a href="#demos" className="smooth-scroll-demos">
                          Demos
                        </a>
                      </li>
                      <li>
                        <a href="#inner_page" className="smooth-scroll-demos">
                          Inner Page
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="#"
                        >
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* header btn */}
                <div className="col-lg-3 col-md-3 col-6 button_area">
                  <div className="btn-wrapper text-right flex justify-end">
                    <a href="#" className="default_btn flex items-center">
                      <span>Purchase Now</span>
                      <BsCart3 size={20} className="ml-[5px] font-bold inline" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
