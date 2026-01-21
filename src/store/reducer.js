// reducer.js
import {
  ADD_SERVICE,
  EDIT_SERVICE,
  CANCEL_EDIT,
  REMOVE_SERVICE,
  START_EDIT_SERVICE,
  SET_FILTER,
} from './actions';

const initialState = {
  services: [
    { id: 1, name: 'Замена стекла', price: 21000 },
    { id: 2, name: 'Замена дисплея', price: 25000 },
    { id: 3, name: 'Замена аккумулятора', price: 4000 },
    { id: 4, name: 'Замена микрофона', price: 2500 },
  ],
  editing: null,
  filter: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        services: [
          ...state.services,
          {
            id: Date.now(),
            name: action.payload.name,
            price: Number(action.payload.price),
          },
        ],
      };
    case EDIT_SERVICE:
      return {
        ...state,
        services: state.services.map((service) =>
          service.id === action.payload.id
            ? { ...service, name: action.payload.name, price: Number(action.payload.price) }
            : service
        ),
        editing: null,
      };
    case REMOVE_SERVICE:
      return {
        ...state,
        services: state.services.filter((service) => service.id !== action.payload.id),
        editing: state.editing && state.editing.id === action.payload.id ? null : state.editing,
      };
    case START_EDIT_SERVICE:
      return { ...state, editing: action.payload };
    case CANCEL_EDIT:
      return { ...state, editing: null };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
