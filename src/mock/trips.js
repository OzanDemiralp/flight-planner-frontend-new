import { trip as baseTrip } from './trip';

export const trips = Array.from({ length: 37 }, (_, i) => ({
  ...baseTrip,
  id: `mock-${i + 1}`,
  totalPrice: baseTrip.totalPrice + i * 7,
}));
