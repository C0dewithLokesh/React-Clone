/* eslint-disable react/prop-types */
import { BsCheckCircle } from "react-icons/bs";

const ContentSingle = ({ heading }) => {
  return (
    <div className="animate__content__single">
      <BsCheckCircle size={30} color="#f2277e" className="mr-[5px]" />
      <span>{heading}</span>
    </div>
  );
};

export default ContentSingle;
