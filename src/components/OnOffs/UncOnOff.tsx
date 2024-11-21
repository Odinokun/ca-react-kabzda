import { FC, CSSProperties, useState } from 'react';

type PropsType = {};

export const UncOnOff: FC<PropsType> = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const onClickHandler = () => {
    setIsOn(!isOn);
  };

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
      <span style={{ ...mainStyle, ...onStyle }} onClick={onClickHandler}>
        on
      </span>
      <span style={{ ...mainStyle, ...offStyle }} onClick={onClickHandler}>
        off
      </span>
      <span style={{ ...mainStyle, ...indicatorStyle }}></span>
    </div>
  );
};
