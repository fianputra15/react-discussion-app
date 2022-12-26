import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveLeaderboardsList, setLeaderboardsList } from './action';


/**
 * skenario testing for leaderboard thunk functionality
 *
 * - LoginForm component
 * - should dispatch action correctly when data fetching is success on leaderboard
 */

const fakeLeaderboardResponse = [
  [
    {
      user: {
        id: 'user-5PqX6Ldhnk_ifroq',
        name: 'Dimas Saputra',
        email: 'dimas@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
      },
      score: 55,
    },
    {
      user: {
        id: 'user-6oWew2w2Wx5xLUTU',
        name: 'Dicoding',
        email: 'admin@dicoding.com',
        avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
      },
      score: 15,
    },
  ],
];

describe('asyncReceiveLeaderboardsList thunk', () => {
  beforeEach(() => {
    api._getLeaderboardList = api.getLeaderboardList;
  });
  afterEach(() => {
    api.getLeaderboardList = api._getLeaderboardList;

    delete api._getLeaderboardList;
  });
  it('should dispatch action correctly when data fetching is success on leaderboard', async () => {
    // arrange
    // stub implementation
    api.getLeaderboardList = () => Promise.resolve(fakeLeaderboardResponse);

    // action
    const dispatch = jest.fn();
    await asyncReceiveLeaderboardsList()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setLeaderboardsList(fakeLeaderboardResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
