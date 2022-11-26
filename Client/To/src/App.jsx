// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// Siempre que es archivo local usar el ./
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={classes ["App"]}>
      {/* Header*/}
      <Header />
      <main>
        <Feed />
      </main>
      <Footer />
    </div>
  );
}

export default App
