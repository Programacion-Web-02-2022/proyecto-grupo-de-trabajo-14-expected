// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// Siempre que es archivo local usar el ./
import classes from './App.module.scss';
import Header2 from './components/Header2/Header2';
import Feed8 from './components/Feed8/Feed8';
import Footer from './components/Footer/Footer';

function App8() {
  // const [count, setCount] = useState(0)

  return (
    <div className={classes ["App"]}>
      {/* Header*/}
      <Header2 />
      <main>
        <Feed8 />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App8
