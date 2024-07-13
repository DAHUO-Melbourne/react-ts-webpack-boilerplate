import React from 'react';
import './styles.scss';

const App = () => {
  return (
    <div className="container">
      <h1>Hello SCSS</h1>
      <button className="button">点击我</button>
      <div className="grid-table">
        <div className="header">Header 1</div>
        <div className="header">Header 2</div>
        <div className="header">Header 3</div>
        <div className="cell">Cell 1</div>
        <div className="cell">Cell 2</div>
        <div className="cell">Cell 3</div>
        <div className="cell">Cell 4</div>
        <div className="cell">Cell 5</div>
        <div className="cell">Cell 6</div>
      </div>
    </div>
  );
};

export default App;
