// actions.js
export const ADD_SERVICE = 'ADD_SERVICE';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const REMOVE_SERVICE = 'REMOVE_SERVICE';
export const START_EDIT_SERVICE = 'START_EDIT_SERVICE';
export const SET_FILTER = 'SET_FILTER';

export const addService = (name, price) => ({
  type: ADD_SERVICE,
  payload: { name, price },
});

export const editService = (id, name, price) => ({
  type: EDIT_SERVICE,
  payload: { id, name, price },
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: { id },
});

export const startEditService = (service) => ({
  type: START_EDIT_SERVICE,
  payload: service,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
