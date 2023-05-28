import logo from './logo.svg';
import './App.css';
import React from 'react';
import { default as Component1 } from './components/home/home.js';
import { default as AppClima } from './components/app_clima/app.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component1 />}>
        </Route>
          <Route path="/app" element={<AppClima />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//         <body>
//         <Component1/>
//         </body>
//
//     </div>
//   );
// }

