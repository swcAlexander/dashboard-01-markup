import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import customersData from './customers.json';

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
    <div>
      <div>
        <div>
          <h2>All Customers</h2>
          <span>Active Members</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
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
