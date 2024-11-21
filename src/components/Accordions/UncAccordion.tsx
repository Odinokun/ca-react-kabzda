import { FC, useState } from 'react';

type UncAccordionPropsType = {
  titleValue: string;
};

export const UncAccordion: FC<UncAccordionPropsType> = ({
  titleValue,
  ...restProps
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggleHandler = () => setCollapsed(!collapsed);

  return (
    <div>
      <div>
        <UncAccordionTitle title={titleValue} />
        <button onClick={onToggleHandler}>toggle</button>
      </div>
      {!collapsed ? <UncAccordionBody /> : null}
    </div>
  );
};

type UncAccordionTitlePropsType = {
  title: string;
};

const UncAccordionTitle: FC<UncAccordionTitlePropsType> = ({ title }) => {
  return <h3>{title}</h3>;
};

type UncAccordionBodyPropsType = {};

export const UncAccordionBody: FC<UncAccordionBodyPropsType> = () => {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
};
