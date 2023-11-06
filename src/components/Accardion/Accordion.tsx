import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccrodionBody";

type AccordionPropsType = {
  title: string,
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={props.title} />
      { !props.collapsed && <AccordionBody /> }
    </>
  );
}

export default Accordion;