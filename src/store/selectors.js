export const selectFilteredServicesCount = (state) => {
  const { services, searchFilter } = state; 
  return services.filter(service => service.name.toLowerCase().includes(searchFilter.toLowerCase())).length;
};

export const selectFilteredServices = (state) => {
  const { services, searchFilter } = state;
  return services.filter(service => service.name.toLowerCase().includes(searchFilter.toLowerCase()));
};
