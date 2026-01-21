import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './ServiceList.module.css'; // Убедитесь, что путь к CSS правильный
import { startEditService, removeService } from '../../store/actions';

export default function ServiceList({ services }) {
  const dispatch = useDispatch();

  const handleEdit = (service) => {
    dispatch(startEditService(service));
  };

  const handleRemove = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить эту услугу?')) {
      dispatch(removeService(id));
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Общее количество услуг: {services.length}</h2>
      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service.id} className={styles.item}>
            <span className={styles.serviceInfo}>
              <span className={styles.serviceName}>{service.name}</span>
              <span className={styles.servicePrice}>{service.price.toLocaleString()} ₽</span>
            </span>
            <div className={styles.actions}>
              <button 
                onClick={() => handleEdit(service)} 
                className={styles.editButton}
                title="Редактировать"
              >
                ✎
              </button>
              <button 
                onClick={() => handleRemove(service.id)} 
                className={styles.deleteButton}
                title="Удалить"
              >
                ×
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}