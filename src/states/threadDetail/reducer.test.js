// /* eslint-disable no-undef */
import threadDetailReducer from './reducer';
/**
 * test screnario for leaderboard reducer
 * - leaderboardReducer function
 * - show return the initial state when given by unknown action
 * - should return leaderboard list when give by SET_LEADERBOARDS_LIST
 *
 */

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];

    const action = { type: 'UNKNOWN TYPE' };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
describe('threadDetailReducer function', () => {
  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-08_nUU2fhu1P5nre',
          title: 'Pengalaman Belajar React di Dicoding',
          body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
          createdAt: '2022-11-13T09:59:31.019Z',
          owner: {
            id: 'user-5PqX6Ldhnk_ifroq',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          category: 'react',
          comments: [
            {
              id: 'comment-YTSJSqOj7XQgFB33',
              content: 'test',
              createdAt: '2022-12-13T04:32:25.594Z',
              owner: {
                id: 'user-5PqX6Ldhnk_ifroq',
                name: 'Dimas Saputra',
                avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
              },
              upVotesBy: [],
              downVotesBy: [
                'user-5PqX6Ldhnk_ifroq',
              ],
            },
          ],
          upVotesBy: [
            'user-6oWew2w2Wx5xLUTU',
            'user-5PqX6Ldhnk_ifroq',
            'user-t2PLqorJ-12i85Y8',
            'user-UCUX9FYHzJwyKVwL',
          ],
          downVotesBy: [],
        },
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
});
