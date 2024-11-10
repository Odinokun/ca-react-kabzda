import { FC } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';

function App() {
  return (
    <div className='App'>
      <Accordion titleValue='Menu' collapsed={true} />
      <Accordion titleValue='Users' collapsed={false} />
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
