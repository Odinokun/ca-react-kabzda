import { FC } from 'react';

type CtrlAccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

export const CtrlAccordion: FC<CtrlAccordionPropsType> = ({
  titleValue,
  collapsed,
  ...restProps
}) => {
  return (
    <div>
      <CtrlAccordionTitle title={titleValue} />
      {!collapsed ? <CtrlAccordionBody /> : null}
    </div>
  );
};

type CtrlAccordionTitlePropsType = {
  title: string;
};

const CtrlAccordionTitle: FC<CtrlAccordionTitlePropsType> = ({ title }) => {
  return <h3>{title}</h3>;
};

type CtrlAccordionBodyPropsType = {};

export const CtrlAccordionBody: FC<CtrlAccordionBodyPropsType> = () => {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
};
