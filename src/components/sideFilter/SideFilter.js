import React from 'react';
import css from './SideFilter.module.scss';

const SideFilter = ({onFilterclicked}) => {
    return (
        <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="oil" onClick={(e) => onFilterclicked('subcategory', 'oil')} />
              <label className="form-check-label" htmlFor="oil"> Oil </label>
            </div>
        </div>
    )
}

export default SideFilter;