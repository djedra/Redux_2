import React from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.css'; 
import { ServiceForm, ServiceList, ServiceFilter } from './components'; 

export default function App() {
  const { services, filter } = useSelector((state) => state);

  
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
