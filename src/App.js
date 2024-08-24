import React from 'react';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}



 
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


export default App;
// npx โหลดไม่เก็บไว้ในเครื่อง
// npm โหลดเก็บไว้ในเครื่อง
