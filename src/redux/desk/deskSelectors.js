import { createSelector } from 'reselect';
import { selectBackImg } from '../filter/filterSelectors';

export const selectDesks = state => state.desks.desks.items;

export const selectIsLoading = state => state.desks.desks.isLoading;

export const selectError = state => state.desks.desks.error;

export const selectActiveDeskId = state => state.desks.desks.activeDeskId;

export const selectChangeDeskId = state => state.desks.desks.changeDeskId;

export const selectChangeDeskTitle = state => state.desks.desks.changeDeskTitle;

export const selectVisibleDesks = createSelector(
  [selectDesks, selectBackImg],
  (desks, filterValue) => {
    const visibleDesks = desks.filter(desk => desk.background.includes(filterValue));

    return visibleDesks;
  }
);
