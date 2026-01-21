export const selectFilteredServicesCount = (state) => {
  const { services, searchFilter } = state; // Предполагается, что в состоянии есть services и searchFilter
  return services.filter(service => service.name.toLowerCase().includes(searchFilter.toLowerCase())).length; // Игнорируем регистр
};

export const selectFilteredServices = (state) => {
  const { services, searchFilter } = state;
  return services.filter(service => service.name.toLowerCase().includes(searchFilter.toLowerCase())); // Возвращаем отфильтрованные услуги
};
