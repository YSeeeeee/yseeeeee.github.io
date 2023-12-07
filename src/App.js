import React from 'react';
import Intro from './Intro';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize : 24,
    padding: '1rem'
  }

  return (
    <>
        <Intro />
        <div style={style}>{name}</div>
        <div className='gray-box'></div>
    </>
  );
}

export default App;
