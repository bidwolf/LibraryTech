import React, { Fragment } from 'react';
import Topo from './components/Topo/Topo';
import Footer from './components/Footer/Footer';
import Principal from './components/Principal/Principal';
function App() {
  return (
    <Fragment>
      <Topo/>
      <Principal />
      <Footer/>
    </Fragment>
  );
}

export default App;
