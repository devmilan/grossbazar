import React from 'react';
import css from './SideFilter.module.scss';

const SideFilter = ({filters, onFilterclicked}) => {
  console.log(filters)
    return (
        <div>
            { filters && filters.subcategories && filters.subcategories.map((filter, i)=>
              <div className="form-check" key={i}>
                <input className="form-check-input" type="checkbox" value="" id={filter} onClick={(e) => onFilterclicked('subcategory', filter)} />
                <label className="form-check-label" htmlFor={filter}> {filter} </label>
              </div>
            )}
            {/* { filters && filters.maxPrice && filters.maxPrice &&
              <div>Min ({filters.maxPrice}) and Max ({filters.maxPrice})</div>  
            } */}
        </div>
    )
}

export default SideFilter;