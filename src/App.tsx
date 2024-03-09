// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { ROUTES } from '!/routes/domain';
import DefaultLayout from '@/DefaultLayout';
import NotFound from '@/NotFound';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route element={<DefaultLayout />}>
            {ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={<route.node />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
