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
            { filters && filters.price &&
              <div>Min ({filters.price.min}) and Max ({filters.price.max})</div>  
            }
        </div>
    )
}

export default SideFilter;