import { FC } from 'react';
import './onOff.css';

type PropsType = {
  isOn: boolean;
};

export const OnOff: FC<PropsType> = ({ isOn }) => {
  return (
    <div className='on-off'>
      <span style={{ backgroundColor: isOn ? 'green' : '' }}>on</span>
      <span style={{ backgroundColor: !isOn ? 'red' : '' }}>off</span>
      <span
        className='circle'
        style={{ backgroundColor: isOn ? 'green' : 'red' }}
      ></span>
    </div>
  );
};
