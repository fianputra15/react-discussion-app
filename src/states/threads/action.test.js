import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncToogleUpVoteThread, toggleUpvoteThreadActionCreator } from './action';
// Testing for thunk functionality

const fakeThreadResponse = [
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
];

describe('asyncToogleUpVoteThread thunk', () => {
  const mockState = {
    authUser: {
      id: 'user-1',
    },

  };
  beforeEach(() => {
    api._toggleUpVoteThread = api.toggleUpVoteThread;
  });

  afterEach(() => {
    api.toggleUpVoteThread = api._toggleUpVoteThread;
    delete api._toggleUpVoteThread;
  });

  it('should dispatch action correctly when clicking toggle up vote', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadResponse);
    // action
    const dispatch = jest.fn();
    const getState = jest.fn(() => mockState);
    await asyncToogleUpVoteThread('thread-1')(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(toggleUpvoteThreadActionCreator({ threadId: 'thread-1', userId: getState().authUser.id }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
