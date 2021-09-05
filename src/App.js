import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import './styles/App.css';
function App() {
  const [value, setValue] = useState('Text in input')

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - язык программирования
          </div>
        </div>
        <div className="post__btn">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
