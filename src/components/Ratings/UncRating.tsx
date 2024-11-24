import { FC, useState } from 'react';

type PropsType = {};

export const UncRating: FC<PropsType> = () => {
  const [value, setValue] = useState<number>(0);

  const onClickHandler = (value: number) => {
    setValue(value);
  };

  return (
    <>
      <div>
        <button onClick={() => onClickHandler(1)}>1</button>
        <button onClick={() => onClickHandler(2)}>2</button>
        <button onClick={() => onClickHandler(3)}>3</button>
        <button onClick={() => onClickHandler(4)}>4</button>
        <button onClick={() => onClickHandler(5)}>5</button>
        <button onClick={() => onClickHandler(0)}>Reset</button>
      </div>
      <div>
        <Star selected={value > 0} />
        <Star selected={value > 1} />
        <Star selected={value > 2} />
        <Star selected={value > 3} />
        <Star selected={value > 4} />
      </div>
    </>
  );
};

type StarPropsType = {
  selected: boolean;
};

const Star: FC<StarPropsType> = ({ selected }) => {
  return <span>{selected ? <b>star </b> : 'star '}</span>;
};
