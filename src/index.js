/** @format */

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      react项目测试呀
      <img src={require('./assets/images/cat.jpg')} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));