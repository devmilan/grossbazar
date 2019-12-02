import React from 'react';
import css from './Pagination.module.scss';

const Pagination = ({ totalResults, itemPerPage, page, onPageClick }) => {

  let pages = [];
  let numberOfPages = Math.floor(totalResults / itemPerPage);
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i)
  }


  return (
    <>
      {pages.length > 0 &&
        <nav className={css.pagination_section}>
          <ul className="pagination justify-content-center">
            {/* <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li> */}
            {pages.map((p, i) =>
              p === page ?
                <li className="page-item active" aria-current="page">
                  <span className="page-link">{p}<span className="sr-only">(current)</span>
                  </span>
                </li>
                :
                <li className="page-item" onClick={() => onPageClick(p)} ><bitton className="page-link">{p}</bitton></li>
            )}
            {/* <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li> */}
          </ul>
        </nav>
      }
    </>
  )
}

export default Pagination;