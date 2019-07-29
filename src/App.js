import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Service from './components/Service';
import About from './components/About';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <Service/>
      <About/>
    </React.Fragment>            
  );
}

export default App;