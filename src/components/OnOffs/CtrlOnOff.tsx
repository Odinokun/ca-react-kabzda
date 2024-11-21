import { FC, CSSProperties } from 'react';

type PropsType = {
  isOn: boolean;
};

export const CtrlOnOff: FC<PropsType> = ({ isOn, ...restProps }) => {
  const wrapperStyle: CSSProperties = {
    display: 'flex',
  };
  const mainStyle: CSSProperties = {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid #000',
  };
  const onStyle: CSSProperties = {
    backgroundColor: isOn ? 'green' : 'white',
  };
  const offStyle: CSSProperties = {
    backgroundColor: !isOn ? 'tomato' : 'white',
  };
  const indicatorStyle: CSSProperties = {
    borderRadius: '50%',
    marginLeft: '10px',
    backgroundColor: isOn ? 'green' : 'tomato',
  };

  return (
    <div style={wrapperStyle}>
      <span style={{ ...mainStyle, ...onStyle }}>on</span>
      <span style={{ ...mainStyle, ...offStyle }}>off</span>
      <span style={{ ...mainStyle, ...indicatorStyle }}></span>
    </div>
  );
};
