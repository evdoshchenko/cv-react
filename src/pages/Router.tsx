import {
  createHashRouter,
} from 'react-router-dom';
import { 
  StartPage,
  ProfilePage,
  ErrorPage,
} from '@/pages';
import { 
  START_ROUTE,
  PROFILE_ROUTE
} from './routes'

export const Router = createHashRouter([
  {
    path: START_ROUTE,
    element: <StartPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: PROFILE_ROUTE,
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
    children: [],
  },
])
