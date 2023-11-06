import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccrodionBody";

type AccordionPropsType = {
  title: string
}

function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </>
  );
}

export default Accordion;