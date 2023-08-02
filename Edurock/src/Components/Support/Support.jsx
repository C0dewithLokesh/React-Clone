import documentImg from "../../assets/supportdocuments.webp";
import helpLineImg from "../../assets/help-line.webp";
import hiredImg from "../../assets/hired.webp";
import SupportCard from "./SupportCard";

const Support = () => {
  return (
    <div className="doc__support__hire pb-[90px]">
      <div className="container">
        <div className="row">
          <SupportCard
            img={documentImg}
            heading={'Online Documentation'}
            paragraph={'The job is much easier with good documentation. Up-to-date and organized doc from us'}
            btnContent={'View Documentation'}
          />

          <SupportCard
            img={helpLineImg}
            heading={'Dedicated Support'}
            paragraph={'Need assistance? Send a ticket in. We will be pleased to help you.'}
            btnContent={'Get Expert Support'}
            btnClass={'support__btn'}
          />

          <SupportCard
            img={hiredImg}
            heading={'Hire Developer & Designer'}
            paragraph={"Give us the project's specifics, and our developer will finish it more quickly, better, and effectively than you could ever imagine."}
            btnContent={'Hire Expert'}
          />
        </div>
      </div>
    </div>
  )
}

export default Support;