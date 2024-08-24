import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar';

function App() {

 return (
  <div>
  <Navbar />
    <h1 style={{ padding: '4rem 0', margin: '0 auto', maxWidth: 1200 }}>
    Hello React
   </h1>  
  </div>
   



);
 
  
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
}

export default App;
// npx โหลดไม่เก็บไว้ในเครื่อง
// npm โหลดเก็บไว้ในเครื่อง
