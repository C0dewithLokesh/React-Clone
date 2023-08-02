import { Accordion } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import { accordionData } from "./AccordianData";

const Faq = () => {
  return (
    <div className="faqarea pb-[120px]">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
            <div className="faqarea__heading relative top-[60px] ">
              <h3 className=" text-offwhite text-[200px] font-bold uppercase opacity-50">
                faq
              </h3>
            </div>
          </div>

          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
            <div className="faqarea__wrapper">
              <Accordion>
                {accordionData.map((item) => (
                  <AccordionItem
                    key={item.eventKey}
                    eventKey={item.eventKey}
                    header={item.header}
                    body={item.body}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
