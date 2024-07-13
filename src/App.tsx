import React from 'react';
import './styles.scss';

const App = () => {
  const headers = ['Header 1', 'Header 2', 'Header 3'];
  const data = [
    { col1: 'Cell 1', col2: 'Cell 2', col3: 'Cell 3' },
    { col1: 'Cell 4', col2: 'Cell 5', col3: 'Cell 6' },
    { col1: 'Cell 7', col2: 'Cell 8', col3: 'Cell 9' },
  ];

  return (
    <div className="container">
      <h1>Hello SCSS</h1>
      <button className="button">点击我</button>
      <div className="grid-table">
        {headers.map((header, index) => (
          <div key={index} className="header">
            {header}
          </div>
        ))}
        {data.map((row, rowIndex) => (
          <>
            <div key={`cell-${rowIndex}-1`} className="cell">
              {row.col1}
            </div>
            <div key={`cell-${rowIndex}-2`} className="cell">
              {row.col2}
            </div>
            <div key={`cell-${rowIndex}-3`} className="cell">
              {row.col3}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
