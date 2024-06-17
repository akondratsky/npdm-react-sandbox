import './App.css';
import { MyDynamicButton, MyDynamicCheckbox } from './npdm';


const App = () => {
  return (
    <div className="content">
      <h1 style={{ marginBottom: 0 }}>NPDM Demo</h1>
      <p style={{ marginBottom: '50px' }}>
        Powered by Rsbuild
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
      }}>
        <MyDynamicButton label='dynamically loaded button' />
        <MyDynamicCheckbox label='this is dynamic checkbox' />
      </div>
    </div>
  );
};

export default App;
