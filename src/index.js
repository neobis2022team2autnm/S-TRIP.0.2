import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Spinner from './components/Spinner';
import '../src/styles/styles.scss'
const App = React.lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);


