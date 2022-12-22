import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth/reducer';
import filteredReducer from './filtered/reducer';
import leaderboardReducer from './leaderboards/reducer';
import threadCommentReducer from './threadComment/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    threadComments: threadCommentReducer,
    leaderboards: leaderboardReducer,
    filtered: filteredReducer,
  },
});

export default store;
