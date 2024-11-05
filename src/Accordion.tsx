import { FC } from 'react';
import { AccordionTitle } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';

type PropsType = {};

export const Accordion: FC<PropsType> = () => {
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
};
