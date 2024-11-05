import { FC } from 'react';
import { Star } from './Star';

type PropsType = {};

export const Rating: FC<PropsType> = () => {
  return (
    <>
      <h3> Rating</h3>
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </>
  );
};
