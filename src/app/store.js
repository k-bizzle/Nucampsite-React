import { userReducer } from '../features/user/userSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import logger from 'redux-logger';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
      campsites: campsitesReducer,
      comments: commentsReducer,
      partners: partnersReducer,
      promotions: promotionsReducer,
      user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
