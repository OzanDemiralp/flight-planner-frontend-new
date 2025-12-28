export const trip = {
  outboundFlight: {
    from: 'IST',
    to: 'SJJ',
    departureDateTime: '2026-05-01T08:00:00.000Z',
    arrivalDateTime: '2026-05-01T10:00:00.000Z',
    price: 130,
  },
  returnFlight: {
    from: 'VIE',
    to: 'IST',
    departureDateTime: '2026-05-06T20:00:00.000Z',
    arrivalDateTime: '2026-05-06T22:00:00.000Z',
    price: 195,
  },
  totalPrice: 325,
  details: {
    nonWorkingDates: ['2026-05-01', '2026-05-02', '2026-05-03'],
    workDates: ['2026-05-04', '2026-05-05', '2026-05-06'],
    nonWorkingDaysCount: 3,
    workDaysUsed: 3,
    totalDays: 6,
  },
};
