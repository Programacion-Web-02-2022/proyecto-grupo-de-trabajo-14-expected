// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// Siempre que es archivo local usar el ./
import classes from './App.module.scss';
import Header from './components/Header/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={classes ["App"]}>
      {/* Header*/}
      <Header />
      {/* Main*/}
      {/* Footer*/}
    </div>
  );
}

export default App
