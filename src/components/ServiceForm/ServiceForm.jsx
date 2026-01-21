import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ServiceForm.module.css';
import { addService, editService, cancelEdit } from '../../store/actions';

export default function ServiceForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({ name: '', price: '' });
  const editing = useSelector((state) => state.editing);
  const servicesCount = useSelector((state) => state.services.length); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setPrice(editing.price.toString());
    } else {
      
      setName('');
      setPrice('');
      setErrors({ name: '', price: '' });
    }
  }, [editing]);

  const validateForm = () => {
    const newErrors = { name: '', price: '' };
    if (name.length < 2) {
      newErrors.name = 'Название услуги должно содержать минимум 2 символа';
    }
    if (!price || parseFloat(price) <= 0) {
      newErrors.price = 'Цена должна быть числом больше 0';
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; 
    }

    if (editing) {
      dispatch(editService(editing.id, name, parseFloat(price)));
    } else {
      dispatch(addService(name, parseFloat(price)));
    }

    
    setName('');
    setPrice('');
    setErrors({ name: '', price: '' });
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
    setName('');
    setPrice('');
    setErrors({ name: '', price: '' }); 
  };

  return (
    <div>
      <h2>{editing ? 'Редактировать услугу' : 'Добавить услугу'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название услуги"
          required
          className={styles.input}
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
        
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Стоимость"
          required
          className={styles.input}
        />
        {errors.price && <div className={styles.error}>{errors.price}</div>}
        
        <button type="submit" className={styles.saveButton}>
          {editing ? 'Обновить' : 'Добавить'}
        </button>
        {editing && (
          <button type="button" onClick={handleCancel} className={styles.cancelButton}>
            Отмена
          </button>
        )}
      </form>
      <p>Всего услуг: {servicesCount}</p> {/* Отображение общего количества услуг */}
    </div>
  );
}
