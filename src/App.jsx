import React from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.css'; // Убедитесь, что путь к CSS правильный
import { ServiceForm, ServiceList, ServiceFilter } from './components'; // Убедитесь, что путь к компонентам правильный

export default function App() {
  const { services, filter } = useSelector((state) => state);

  // Фильтрация услуг на основе введенного фильтра
  const filteredServices = filter
    ? services.filter(service => 
        service.name.toLowerCase().includes(filter.toLowerCase()))
    : services;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление услугами</h1>
      <ServiceFilter />
      <ServiceForm />
      <ServiceList services={filteredServices} />
    </div>
  );
}
