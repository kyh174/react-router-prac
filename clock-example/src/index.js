import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock() {
  const [date, setDate] = useState(new Date());
  const updateTime = () => setDate(new Date());
  
  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}

root.render(<Clock />);