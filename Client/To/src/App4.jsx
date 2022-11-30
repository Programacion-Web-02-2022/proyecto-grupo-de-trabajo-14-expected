// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// Siempre que es archivo local usar el ./
import classes from './App.module.scss';
import Header2 from './components/Header2/Header2';
import Feed4 from './components/Feed4/Feed4';
import Footer from './components/Footer/Footer';

function App4() {
  // const [count, setCount] = useState(0)

  return (
    <div className={classes ["App"]}>
      {/* Header*/}
      <Header2 />
      <main>
        <Feed4 />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App4
