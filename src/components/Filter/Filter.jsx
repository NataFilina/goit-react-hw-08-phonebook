import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../redux/filterSlice';
import { selectorFilter } from '../../redux/selectors';

const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };
  return (
    <div className={css.filter}>
      <h2 className={css.title}>Contacts</h2>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
