import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Shape from './Shape';

const SHAPES = {
  box: 'box',
  sphere: 'sphere',
  cone: 'cone',
  cylinder: 'cylinder',
  torus: 'torus',
}

function App() {
  const [shape, setShape] = useState('box');

  function onSelectShapeHandler(newShape) {
    console.log('Selected shape: ', newShape);
    setShape(SHAPES[newShape]);
    console.log(SHAPES[newShape]);
  }

  
  return (
    <>
      <Header onSelectShape={onSelectShapeHandler}/>
      <Shape shape={shape}/>
    </>
  );
}

export default App;
