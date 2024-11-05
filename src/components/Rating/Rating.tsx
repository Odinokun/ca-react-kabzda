import { FC } from 'react';

type PropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

type StarPropsType = {
  selected: boolean;
};

export const Rating: FC<PropsType> = ({ value }) => {
  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
};

const Star: FC<StarPropsType> = ({ selected }) => {
  return selected ? (
    <span>
      <b>star </b>
    </span>
  ) : (
    <span>star </span>
  );
};
