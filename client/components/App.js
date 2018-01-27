import React from 'react';
import Header from './Header';
import InfoContainer from './InfoContainer';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <InfoContainer />
      {props.children}
    </div>
  );
};

export default App;
