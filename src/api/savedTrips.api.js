import api from './client';

export function saveTrips(tripIds) {
  return api.post('/saveTrips', {
    tripIds,
  });
}
