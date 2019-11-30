import React from 'react';
import css from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={css.backdrop}>
          <div className={css.loader}>Loading...</div>
        </div>
    )
}

export default Loader;