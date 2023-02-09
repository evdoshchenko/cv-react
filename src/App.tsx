import { RouterProvider } from 'react-router-dom';
import { Router } from '@/pages';

export const App = () => {
  return ( 
    <div className="app">
      <RouterProvider router={Router} />
    </div>
  )
}
