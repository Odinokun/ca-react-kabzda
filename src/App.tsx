import { FC } from 'react';
import './App.css';
import { CtrlAccordion } from './components/Accordions/CtrlAccordion';
import { UncAccordion } from './components/Accordions/UncAccordion';
import { CtrlRating } from './components/Ratings/CtrlRating';
import { UncRating } from './components/Ratings/UncRating';
// import { Rating } from './components/Rating/Rating';
// import { OnOff } from './components/OnOff/OnOff';

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
      <CtrlRating value={3} />
      <UncRating />
      <hr />

      {/* 
      <PageTitle title='OnOff' />
    
      <OnOff />
      <br />
      <OnOff /> */}
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
