import spiral from './spiral.png';
import './App.css';

// Spiral source: https://www.pngitem.com/middle/hTxhbJm_transparent-twilight-zone-spiral-hd-png-download/

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={spiral} className='App-logo' alt='logo' />
        <p>The Twilight Zone API</p>
        <p>
          You are about to enter another dimension. But not yet.
          <br />
          Please check back in the future.
        </p>
      </header>
    </div>
  );
}

export default App;
