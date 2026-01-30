import api from './client';

export function saveTrips(tripIds) {
  return api.post('/saveTrips', {
    tripIds,
  });
}

export function getSavedTrips() {
  return api.get('/savedTrips');
}
