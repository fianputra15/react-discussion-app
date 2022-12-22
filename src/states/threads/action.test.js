import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncToogleUpVoteThread, toggleUpvoteThreadActionCreator } from './action';
// Testing for thunk functionality

const fakeThreadResponse = [
  [
    {
      id: 'thread-08_nUU2fhu1P5nre',
      title: 'Pengalaman Belajar React di Dicoding',
      body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
      category: 'react',
      createdAt: '2022-11-13T09:59:31.019Z',
      ownerId: 'user-5PqX6Ldhnk_ifroq',
      totalComments: 1,
      upVotesBy: [
        'user-6oWew2w2Wx5xLUTU',
        'user-5PqX6Ldhnk_ifroq',
      ],
      downVotesBy: [
        'user-t2PLqorJ-12i85Y8',
      ],
    },
  ],
];

describe('asyncToogleUpVoteThread thunk', () => {
  const mockUserState = {
    authUser: {
      id: 'user-1',
    },
  };
  beforeEach(() => {
    api._toggleUpVoteThread = api.toggleUpVoteThread;
  });
  afterEach(() => {
    api.toggleUpVoteThread = api._toggleUpVoteThread;
    jest.clearAllMocks();
    jest.resetAllMocks();
    delete api._toggleUpVoteThread;
  });
  it('should dispatch action correctly when data fetching is success on leaderboard', async () => {
    // arrange
    // stub implementation

    // action
    const dispatch = jest.fn().mockReturnValue(mockUserState);
    await asyncToogleUpVoteThread('thread-1')(dispatch);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(toggleUpvoteThreadActionCreator({ threadId: 'thread-' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
