import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/actions';
import styles from './ServiceFilter.module.css';

export default function ServiceFilter() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const clearFilter = () => {
    dispatch(setFilter(''));
  };

  
  const filteredServicesCount = services.filter(service =>
    service.name.toLowerCase().includes(filter.toLowerCase())
  ).length;

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Поиск услуг..."
        className={styles.filterInput}
      />
      {filter && (
        <button onClick={clearFilter} className={styles.clearButton}>
          ✕
        </button>
      )}
      <div className={styles.statistics}>
        Найдено: {filteredServicesCount} из {services.length} услуг
      </div>
    </div>
  );
}
