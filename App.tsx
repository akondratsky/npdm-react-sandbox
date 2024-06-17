import { connectModule, initNpdm } from '@npdm/module-federation';
import './App.css';
import { checkboxModule, wonderfulButtonModule } from 'npdmjs-react-example';
import React, { lazy } from 'react';

const { loadDynamicModule } = initNpdm({
  name: 'npdmjs-demo',
  npdmUrl: 'http://localhost:4321/',
}, {
  checkbox: connectModule(checkboxModule, '1.0.0'),
  button: connectModule(wonderfulButtonModule, '1.0.0'),
});

const MyButton = lazy(async () => {
  const component = await loadDynamicModule('button');
  if (!component) throw new Error();
  console.log(component);
  return component as any;
});


const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <MyButton label='sadfasdf' />
    </div>
  );
};

export default App;
