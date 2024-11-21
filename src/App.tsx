import { FC } from 'react';
import { CtrlAccordion } from './components/Accordions/CtrlAccordion';
import { UncAccordion } from './components/Accordions/UncAccordion';
import { CtrlRating } from './components/Ratings/CtrlRating';
import { UncRating } from './components/Ratings/UncRating';
import { UncOnOff } from './components/OnOffs/UncOnOff';
import { CtrlOnOff } from './components/OnOffs/CtrlOnOff';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PageTitle title='Accordions' />
      <CtrlAccordion
        titleValue='Controlled accordion (closed)'
        collapsed={true}
      />
      <CtrlAccordion
        titleValue='Controlled accordion (opened)'
        collapsed={false}
      />
      <UncAccordion titleValue='Uncontrolled accordion' />
      <hr />

      <PageTitle title='Ratings' />
      <h4>Controlled rating</h4>
      <CtrlRating value={3} />
      <h4>Uncontrolled rating</h4>
      <UncRating />
      <hr />

      <PageTitle title='OnOffs' />
      <h4>Uncontrolled onOff</h4>
      <UncOnOff />
      <h4>Controlled onOff</h4>
      <CtrlOnOff isOn={true} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

const PageTitle: FC<PageTitlePropsType> = ({ title }) => {
  return <h3>{title}</h3>;
};

export default App;
