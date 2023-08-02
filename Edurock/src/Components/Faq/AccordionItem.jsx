/* eslint-disable react/prop-types */
import { Accordion } from 'react-bootstrap';

const AccordionItem = ({ eventKey, header, body }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{body}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
