import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateTheme, currentUser, updateName, updateAvatar, updateEmail } from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    theme: '',
    id: null,
  },
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrThunks = [register, logIn, logOut, refreshUser, currentUser];

const fn = type => arrThunks.map(elem => elem[type]);

const handleIsLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
};

const handleLogout = (state) => {
  state.user = { name: null, email: null };
  state.accessToken = null;
  state.isLoggedIn = false;
  state.theme = '';
};

const handleRefreshUserPending = (state) => {
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, {payload}) => {
  state.accessToken = payload.accessToken;
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
const handleUpdateTheme = (state, { payload }) => {
  state.user.theme = payload.theme;
  state.token = payload.token;
};

const handleCurrent = (state, { payload }) => {
  state.user = payload;
};

const handleUpdateName = (state, { payload }) => { 
  state.user.name = payload.name;
}

const handleUpdateEmail= (state, { payload }) => { 
  state.user.email = payload.email;
}

const handleUpdateAvatar = (state, { payload }) => { 
  state.user.avatarURL = payload;
}

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
      .addCase(currentUser.fulfilled, handleCurrent)
      .addCase(updateTheme.fulfilled, handleUpdateTheme)
      .addCase(updateName.fulfilled, handleUpdateName)
      .addCase(updateAvatar.fulfilled, handleUpdateAvatar)
      .addCase(updateEmail.fulfilled, handleUpdateEmail)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled)
    }
  });

export const authReducer = authSlice.reducer;
