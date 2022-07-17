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
      <Route path="/" element={<App></App>}>
        <Route path='/expenses' element={<Expenses></Expenses>}></Route>
        <Route path='/invoices' element={<Invoices></Invoices>}>
          <Route path=':invoiceId' element={<Invoices></Invoices>}></Route>
        </Route>
        <Route path='*' element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        >
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
