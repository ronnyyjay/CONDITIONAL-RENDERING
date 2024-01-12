import { FC } from 'react';

import './style.css';
import ConditionalDemo1 from './components/Conditional-Demo-1';
import ConditionalDemo2 from './components/Conditional-Demo-2';
import ConditionalDemo3 from './components/Conditional-Demo-3';
import ConditionalDemo4 from './components/Conditional-Demo-4';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <ConditionalDemo1 />
      <ConditionalDemo2 />
      <ConditionalDemo3 />
      <ConditionalDemo4 />
    </>
  );
};

export default App;
