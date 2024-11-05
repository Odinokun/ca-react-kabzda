import { FC } from 'react';

type PropsType = {
  title: string;
};

type AccordionTitlePropsType = {
  title: string;
};

type AccordionBodyPropsType = {};

export const Accordion: FC<PropsType> = ({ title }) => {
  return (
    <div>
      <AccordionTitle title={title} />
      <AccordionBody />
    </div>
  );
};

const AccordionTitle: FC<AccordionTitlePropsType> = ({ title }) => {
  return <h2>{title}</h2>;
};

export const AccordionBody: FC<AccordionBodyPropsType> = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
