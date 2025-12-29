export default function buildPayload(state) {
  const maxTotalPrice =
    state.filters.maxTotalPrice === ''
      ? undefined
      : Number(state.filters.maxTotalPrice);
  const maxWorkDaysUsed =
    state.filters.maxWorkDaysUsed === ''
      ? undefined
      : Number(state.filters.maxWorkDaysUsed);

  return {
    departureFrom: state.departureFrom.trim(),
    departureTo: state.departureTo.trim(),
    returnFrom: state.returnFrom.trim(),
    returnTo: state.returnTo.trim(),

    vacationLength: Number(state.vacationLength),
    minNonWorkingDays: Number(state.minNonWorkingDays),

    searchWindow: {
      startDate: toISODateOnly(state.searchWindow.startDate),
      endDate: toISODateOnly(state.searchWindow.endDate),
    },

    filters: {
      ...(maxTotalPrice !== undefined ? { maxTotalPrice } : {}),
      ...(maxWorkDaysUsed !== undefined ? { maxWorkDaysUsed } : {}),
    },

    sort: [
      {
        by: state.sort.by,
        order: state.sort.order,
      },
    ],
  };
}

function toISODateOnly(valueYYYYMMDD) {
  if (!valueYYYYMMDD) return null;
  const d = new Date(valueYYYYMMDD);
  return d.toISOString();
}
