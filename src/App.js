import spiral from './spiral.png';
import './App.css';

// Spiral source: https://www.pngitem.com/middle/hTxhbJm_transparent-twilight-zone-spiral-hd-png-download/

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={spiral} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
