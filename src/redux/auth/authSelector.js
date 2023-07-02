export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;

export const selectToken = state => state.auth.accessToken;

export const getAvatar = (state) => state.auth?.user?.avatarURL;

export const getName = (state) => state.auth?.user?.name;

export const selectGetTheme = state => state.auth?.user?.theme;

export const getUserId = state => state.auth?.user?.id;

export const getUserEmail = state => state.auth?.user?.email;