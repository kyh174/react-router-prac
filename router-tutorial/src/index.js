import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path='/expenses' element={<Expenses></Expenses>}></Route>
      <Route path='/invoices' element={<Invoices></Invoices>}></Route>
    </Routes>
  </BrowserRouter>
);
