import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action';
// Testing for thunk functionality

const fakeThreadDetailResponse = {
  id: 'thread-GIUYgCkSwkjMYyaJ',
  title: 'Fusce at neque sem. Vestibulum vestibulum justo a mollis mattis. ',
  body: 'Mauris placerat ex sem, vitae aliquet purus pellentesque a. Sed ut arcu pellentesque, lacinia diam vitae, sagittis ante. \n\nCras facilisis hendrerit posuere. Vivamus sagittis massa laoreet ante tempor convallis. Nulla justo nisi, ornare quis sapien id, commodo porta mi. Donec tellus metus, dictum vitae pellentesque eu, scelerisque sed orci. Sed massa dui, blandit in urna sed, fermentum gravida erat. Etiam sagittis, est vitae pulvinar ornare, sapien ipsum gravida purus, eu accumsan erat sapien sit amet ipsum. \n\nSed vel volutpat lorem, quis iaculis odio. Integer rutrum auctor arcu, eget vehicula massa varius vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed convallis sapien sit amet lectus iaculis, eu molestie lorem elementum.',
  createdAt: '2022-12-22T14:08:53.941Z',
  owner: {
    id: 'user-LBZ7Kk1gglxm05b5',
    name: 'Erika Kim',
    avatar: 'https://ui-avatars.com/api/?name=Erika Kim&background=random',
  },
  category: 'lorem',
  comments: [
    {
      id: 'comment-8bx7vIKHS8nFuY-q',
      content: 'Cras ultricies congue augue sit amet luctus.',
      createdAt: '2022-12-22T14:09:14.042Z',
      owner: {
        id: 'user-LBZ7Kk1gglxm05b5',
        name: 'Erika Kim',
        avatar: 'https://ui-avatars.com/api/?name=Erika Kim&background=random',
      },
      upVotesBy: [
        'user-LBZ7Kk1gglxm05b5',
      ],
      downVotesBy: [],
    },
  ],
  upVotesBy: [
    'user-LBZ7Kk1gglxm05b5',
  ],
  downVotesBy: [],
};

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });
  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;

    delete api._getThreadDetail;
  });
  it('should dispatch action correctly when data fetching is success on thread detail', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

    // action
    const dispatch = jest.fn();
    await asyncReceiveThreadDetail()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch)
      .toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
