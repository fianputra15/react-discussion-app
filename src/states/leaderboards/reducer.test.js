import leaderboardReducer from './reducer';
/**
 * test screnario for leaderboard reducer
 * - leaderboardReducer function
 * - show return the initial state when given by unknown action
 * - should return leaderboard list when give by SET_LEADERBOARDS_LIST
 *
 */

describe('leaderboardReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];

    const action = { type: 'UNKNOWN TYPE' };

    const nextState = leaderboardReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
describe('leaderboardReducer function', () => {
  it('should return the leaderboard list when given by SET_LEADERBOARDS_LIST action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_LEADERBOARDS_LIST',
      payload: {
        leaderboardsList: [
          {
            user: {
              id: 'user-tes1',
              name: 'tes2',
              email: 'tes1@gmail.com',
              avatar: 'https://ui-avatars.com/api/?name=Eko&background=random',
            },
            score: 40,
          },
          {
            user: {
              id: 'user-tes2',
              name: 'tes2',
              email: 'tes2@gmail.com',
              avatar: 'https://ui-avatars.com/api/?name=Eko&background=random',
            },
            score: 60,
          },
        ],
      },
    };
    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboardsList);
  });
});
