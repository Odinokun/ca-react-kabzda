import { Accordion } from './components/Accordion/Accordion';
import './App.css';
import { Rating } from './components/Rating/Rating';
import { FC } from 'react';

function App() {
  return (
    <div className='App'>
      <PageTitle title='Rating 1' />
      <Rating value={3} />
      <hr />

      <Accordion titleValue='Menu' collapsed={true} />
      <hr />

      <PageTitle title='Rating 2' />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <hr />

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
