import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import customersData from './customers.json';
import './customers.scss';

function Customers() {
  const [data, setData] = useState(customersData);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);

  const displayData = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => (
      <tr key={index}>
        <td>{user['Customer name']}</td>
        <td>{user.Company}</td>
        <td>{user['Phone Number']}</td>
        <td>{user.Email}</td>
        <td>{user.Country}</td>
        <td>{user.Status ? 'Active' : 'Inactive'}</td>
      </tr>
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='customers-section'>
      <div className='costumer-section__header'>
        <div className='customers-section__container'>
          <h2 className='customers-section__title'>All Customers</h2>
          <span  className='customers-section__span'>Active Members</span>
        </div>
        <div className="search-container">
          <input  className='search-input' type="text" placeholder="Search" />
        </div>
      </div>
      <table className='customers-section__table'>
        <thead className='customers-section__table-thead'>
          <tr className='customers-section__table-row'>
            <th className='customers-section__table-header'>Customer Name</th>
            <th className='customers-section__table-header'>Company</th>
            <th className='customers-section__table-header'>Phone Number</th>
            <th className='customers-section__table-header'>Email</th>
            <th className='customers-section__table-header'>Country</th>
            <th className='customers-section__table-header'>Status</th>
          </tr>
        </thead>
        <tbody className='customers-section__table-body'>{displayData}</tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Customers;
