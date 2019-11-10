import produce from 'immer';

export const albumInitialState = {
  localLoder: false,
};

const albumStore = (state = albumInitialState, action) =>
  produce(state, draft => {
    const draftState = draft;
    switch (action.type) {
      default:
        state;
    }
  });

export default albumStore;
