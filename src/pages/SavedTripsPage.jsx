import { trips } from '../mock/trips.js';
import SavedTripList from '../components/SavedTripList/SavedTripList.jsx';

export default function SavedPage() {
  return <SavedTripList trips={trips} />;
}
