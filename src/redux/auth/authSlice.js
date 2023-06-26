import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser  } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrThunks = [register, logIn, logOut, refreshUser];

const fn = type => arrThunks.map(elem => elem[type]);

const handleIsLogIn = (state, { payload }) => {
  // state.user = payload.user;
  state.token = payload.accessToken;
  state.isLoggedIn = true;
};

const handleLogout = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserPending = (state) => {
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, {payload}) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshUserRejected = (state, {payload}) => {
  state.isRefreshing = false;
};

const handlePending = (state) => {
  state.isLoggedIn = true
};
const handleFulfilled = (state) => {
  state.isLoggedIn = false;
  state.error = ""
}; 
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload
}; 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder.addCase(register.fulfilled, handleIsLogIn)
      .addCase(logIn.fulfilled, handleIsLogIn)
      .addCase(logOut.fulfilled, handleLogout)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled)
    }
  });

export const authReducer = authSlice.reducer;
