import { useEffect, useState } from 'react';
import SavedTripList from '../components/SavedTripList/SavedTripList.jsx';
import { getSavedTrips } from '../api/savedTrips.api.js';
import { useAuth } from '../auth/authContext.jsx';

export default function SavedPage() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const { setFlash } = useAuth();

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        const res = await getSavedTrips();
        if (!alive) return;
        setTrips(res.data.trips ?? []);
      } catch (err) {
        console.error(err);
        setFlash?.({ type: 'error', message: 'Failed to load saved trips' });
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [setFlash]);

  return <SavedTripList trips={trips} loading={loading} />;
}
