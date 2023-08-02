/* eslint-disable react/prop-types */
import { BsCheckCircle } from "react-icons/bs";

const ContentSingleTwo = ({ heading }) => {
  return (
    <div className="animate__content__single animate__content__single--2">
      <BsCheckCircle size={30} color="#f2277e" className="mr-[5px]" />
      <span>{heading}</span>
    </div>
  );
};

export default ContentSingleTwo;
