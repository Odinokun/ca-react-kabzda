import { FC } from 'react';
import './App.css';
import { CtrlAccordion } from './components/Accordions/CtrlAccordion';
import { UncAccordion } from './components/Accordions/UncAccordion';
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

      {/* 
      <PageTitle title='Rating' />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <hr /> */}
      {/* <PageTitle title='OnOff' />
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
  return <h2>{title}</h2>;
};

export default App;
