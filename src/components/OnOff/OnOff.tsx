import { FC, CSSProperties } from 'react';

type PropsType = {
  isOn: boolean;
};

export const OnOff: FC<PropsType> = ({ isOn, ...restProps }) => {
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    // justifyContent: 'center',
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
    backgroundColor: isOn ? 'green' : '',
  };

  const offStyle: CSSProperties = {
    backgroundColor: !isOn ? 'red' : '',
  };

  const indicatorStyle: CSSProperties = {
    backgroundColor: isOn ? 'green' : 'red',
    borderRadius: '50%',
    marginLeft: '10px',
  };
  return (
    <div style={wrapperStyle}>
      <span style={{ ...mainStyle, ...onStyle }}>on</span>
      <span style={{ ...mainStyle, ...offStyle }}>off</span>
      <span style={{ ...mainStyle, ...indicatorStyle }}></span>
    </div>
  );
};

//************************************************ */
//************************************************ */
//************************************************ */
// export const OnOff: FC<PropsType> = ({ isOn, ...restProps }) => {
//   return (
//     <div className='on-off'>
//       <span style={{ backgroundColor: isOn ? 'green' : '' }}>on</span>
//       <span style={{ backgroundColor: !isOn ? 'red' : '' }}>off</span>
//       <span
//         className='circle'
//         style={{ backgroundColor: isOn ? 'green' : 'red' }}
//       ></span>
//     </div>
//   );
// };
