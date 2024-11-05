import { FC } from 'react';

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

export const Accordion: FC<AccordionPropsType> = ({
  titleValue,
  collapsed,
}) => {
  return (
    <div>
      <AccordionTitle title={titleValue} />
      {!collapsed ? <AccordionBody /> : null}
    </div>
  );
};

type AccordionTitlePropsType = {
  title: string;
};

const AccordionTitle: FC<AccordionTitlePropsType> = ({ title }) => {
  return <h2>{title}</h2>;
};

type AccordionBodyPropsType = {};

export const AccordionBody: FC<AccordionBodyPropsType> = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
