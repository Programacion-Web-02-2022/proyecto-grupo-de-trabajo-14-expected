// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// Siempre que es archivo local usar el ./
import classes from './App.module.scss';
import Header2 from './components/Header2/Header2';
import Feed5 from './components/Feed5/Feed5';
import Footer from './components/Footer/Footer';

function App5() {
  // const [count, setCount] = useState(0)

  return (
    <div className={classes ["App"]}>
      {/* Header*/}
      <Header2 />
      <main>
        <Feed5 />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App5
