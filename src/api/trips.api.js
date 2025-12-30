import api from './client';

export const planTrip = (payload) => {
  return api.post('/planTrip', payload);
};
