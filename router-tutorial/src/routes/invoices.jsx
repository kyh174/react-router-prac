import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';
import invoice from './invoice';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className='invoices-div'>
      <nav className='invoices-nav'>
        {invoices.map((invoice) => (
          <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}