import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav className='nav-bar'>
        <Link to='/invoices'>Invoices</Link> |{" "}
        <Link to='/expenses'>Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}