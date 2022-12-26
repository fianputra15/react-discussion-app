
import threadReducer from './reducer';

/**
 * test screnario for thread reducer
 * - should return the initial state when given by unknown action
 * - should return the threads when given by RECEIVE_THREAD action
 * - should remove user from downVoteBy after up-vote the thread then should remove user from upVoteBy after down-vote the thread
 */

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];

    const action = { type: 'UNKNOWN TYPE' };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});

describe('threadReducer function', () => {
  it('should return the threads when given by RECEIVE_THREAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD',
      payload: {
        threads: [
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
          {
            id: 'thread-B3N9KGa87vfMHyBQ',
            title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
            body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
            category: 'introduction',
            createdAt: '2022-11-13T09:55:55.353Z',
            ownerId: 'user-6oWew2w2Wx5xLUTU',
            totalComments: 1,
            upVotesBy: [
              'user-5PqX6Ldhnk_ifroq',
              'user-6oWew2w2Wx5xLUTU',
            ],
            downVotesBy: [],
          },
        ],
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
});

describe('threadReducer function', () => {
  it('Test up vote then down vote the thread', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const actionUpvote = {
      type: 'TOGGLE_UPVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action up vote thread
    const nextState = threadReducer(initialState, actionUpvote);
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [actionUpvote.payload.userId],
        downVotesBy: [],
      },
    ]);

    const actionDownVote = {
      type: 'TOGGLE_DOWNVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };
    // action down vote thread
    const nextState2 = threadReducer(initialState, actionDownVote);

    expect(nextState2).toEqual([
      {
        ...initialState[0],
        downVotesBy: [actionDownVote.payload.userId],
        upVotesBy: [],
      },
    ]);
  });
});
