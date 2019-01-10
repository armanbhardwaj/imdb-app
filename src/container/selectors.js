import { createSelector } from 'reselect';


export const selectIMBD = state => state.search
export const selectIMBD1 = state => state.url
export const selectIMBD2 = state => state.title
export const selectIMBD3 = state => state.input
export const selectIMBD4 = state => state.actors
export const selectIMBD5 = state => state.plot
export const selectIMBD6 = state => state.genre


export const makeselectsearch = () =>
  createSelector(selectIMBD, dogDetailsState =>
    dogDetailsState
  );

export const makeselecturl = () =>
  createSelector(selectIMBD1, dogDetailsState =>
    dogDetailsState
  );

export const makeselecttitle = () =>
  createSelector(selectIMBD2, dogDetailsState =>
    dogDetailsState
  );

  export const makeselectinput = () =>
  createSelector(selectIMBD3, dogDetailsState =>
    dogDetailsState
  );

  export const makeselectactors = () =>
  createSelector(selectIMBD4, dogDetailsState =>
    dogDetailsState
  );

  export const makeselectplot = () =>
  createSelector(selectIMBD5, dogDetailsState =>
    dogDetailsState
  );

  export const makeselectgenre = () =>
  createSelector(selectIMBD6, dogDetailsState =>
    dogDetailsState
  );