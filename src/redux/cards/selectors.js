export const selectIsLoading = (state) => state.cards.isLoading;

export const selectError = (state) => state.cards.error;

export const selectCards = (state) => state.cards.listCards;

export const selectOwnerCards = (state) => state.cards.currentOwner;
